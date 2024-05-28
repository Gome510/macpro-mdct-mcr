import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
// components
import { Form } from "components";
// utils
import {
  mockForm,
  mockMcparReportStore,
  mockMlrReportStore,
  mockNonFieldForm,
  mockStateUserStore,
  RouterWrappedComponent,
} from "utils/testing/setupJest";
import { useStore } from "utils";
// types
import { ReportStatus } from "types";

const mockOnSubmit = jest.fn();

jest.mock("utils/state/useStore");
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;
mockedUseStore.mockReturnValue({
  ...mockStateUserStore,
  ...mockMcparReportStore,
});

const formComponent = (
  <RouterWrappedComponent>
    <Form
      id={mockForm.id}
      formJson={mockForm}
      onSubmit={mockOnSubmit}
      validateOnRender={false}
      dontReset={false}
    />
    <button form={mockForm.id} type="submit">
      Submit
    </button>
  </RouterWrappedComponent>
);

const formComponentJustHeader = (
  <RouterWrappedComponent>
    <Form
      id={mockNonFieldForm.id}
      formJson={mockNonFieldForm}
      onSubmit={mockOnSubmit}
      validateOnRender={false}
      dontReset={false}
    />
    <button form={mockNonFieldForm.id} type="submit">
      Submit
    </button>
  </RouterWrappedComponent>
);

describe("Test Form component", () => {
  test("Form is visible", () => {
    render(formComponent);
    const form = screen.getByText(mockForm.fields[0].props.label);
    expect(form).toBeVisible();
  });

  test("Valid form fill allows submission (calls onSubmit)", async () => {
    const result = render(formComponent);
    const form = result.container;
    const testField = form.querySelector("[name='mock-text-field']")!;
    await userEvent.type(testField, "valid fill");

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    await expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("Submission fails on invalid fill; focuses first errored field", async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    const result = render(formComponent);
    const form = result.container;
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const testField = form.querySelector("[name='mock-text-field']")!;
    expect(testField.hasAttribute("autocomplete")).toBeTruthy();
    expect(testField.getAttribute("autocomplete")).toEqual("one-time-code");
    await expect(testField).toHaveFocus();
  });

  test("Non form field elements should not have autocomplete prop", async () => {
    const result = render(formComponentJustHeader);
    const testField = result.container.querySelector("[name='testfield']")!;
    expect(testField.hasAttribute("autocomplete")).toBeFalsy();
  });

  test("MLR forms should be disabled after being submitted", async () => {
    mockedUseStore.mockReturnValue({
      ...mockMlrReportStore,
      report: { status: ReportStatus.SUBMITTED },
    });
    const { container } = render(formComponent);
    await container.querySelectorAll("input").forEach((x) => {
      expect(x).toBeDisabled();
    });
  });

  test("MCPAR forms should be disabled after being submitted", async () => {
    mockedUseStore.mockReturnValue({
      ...mockMcparReportStore,
      report: { status: ReportStatus.SUBMITTED },
    });
    const { container } = render(formComponent);
    await container.querySelectorAll("input").forEach((x) => {
      expect(x).toBeDisabled();
    });
  });
});

describe("Test Form accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(formComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
