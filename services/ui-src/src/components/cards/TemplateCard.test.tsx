import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { act } from "react-dom/test-utils";
// components
import { TemplateCard } from "components";
// utils
import {
  mockLDFlags,
  mockStateUserStore,
  RouterWrappedComponent,
} from "utils/testing/setupJest";
import { useStore } from "utils";
// verbiage
import verbiage from "verbiage/pages/home";

const mockAPI = require("utils/api/requestMethods/getTemplateUrl");

jest.mock("utils/other/useBreakpoint", () => ({
  useBreakpoint: jest.fn(() => ({
    isDesktop: true,
  })),
}));

jest.mock("utils/state/useStore");
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

const mcparTemplateVerbiage = verbiage.cards.MCPAR;
const mlrTemplateVerbiage = verbiage.cards.MLR;
const naaarTemplateVerbiage = verbiage.cards.NAAAR;

const mcparTemplateCardComponent = (
  <RouterWrappedComponent>
    <TemplateCard templateName="MCPAR" verbiage={mcparTemplateVerbiage} />
  </RouterWrappedComponent>
);

const mlrTemplateCardComponent = (
  <RouterWrappedComponent>
    <TemplateCard templateName="MLR" verbiage={mlrTemplateVerbiage} />
  </RouterWrappedComponent>
);

const naaarTemplateCardComponent = (
  <RouterWrappedComponent>
    <TemplateCard templateName="NAAAR" verbiage={naaarTemplateVerbiage} />
  </RouterWrappedComponent>
);

mockLDFlags.setDefault({ mlrReport: true, naaarReport: true });

describe("Test MCPAR TemplateCard", () => {
  beforeEach(() => {
    render(mcparTemplateCardComponent);
  });

  test("MCPAR TemplateCard is visible", () => {
    expect(screen.getByText(mcparTemplateVerbiage.title)).toBeVisible();
  });

  test("MCPAR TemplateCard download button is visible and clickable", async () => {
    const apiSpy = jest.spyOn(mockAPI, "getSignedTemplateUrl");
    const downloadButton = screen.getByText(mcparTemplateVerbiage.downloadText);
    expect(downloadButton).toBeVisible();
    await act(async () => {
      await userEvent.click(downloadButton);
    });
    await waitFor(() => expect(apiSpy).toHaveBeenCalledTimes(1));
  });

  test("MCPAR TemplateCard image is visible on desktop", () => {
    const imageAltText = "Spreadsheet icon";
    expect(screen.getByAltText(imageAltText)).toBeVisible();
  });

  test("MCPAR TemplateCard link is visible on desktop", () => {
    const templateCardLink = mcparTemplateVerbiage.link.text;
    expect(screen.getByText(templateCardLink)).toBeVisible();
  });

  test("MCPAR TemplateCard navigates to next route on link click", async () => {
    mockedUseStore.mockReturnValue(mockStateUserStore);
    const templateCardLink = screen.getByText(mcparTemplateVerbiage.link.text)!;
    await userEvent.click(templateCardLink);
    const expectedRoute = mcparTemplateVerbiage.link.route;
    await expect(mockUseNavigate).toHaveBeenCalledWith(expectedRoute);
  });
});

describe("Test mlrReport feature flag functionality", () => {
  test("if mlrReport flag is true, MLR available verbiage should be visible", async () => {
    mockLDFlags.set({ mlrReport: true });
    render(mlrTemplateCardComponent);
    expect(screen.getByText(mlrTemplateVerbiage.body.available)).toBeVisible();
    const enterMlrButton = screen.getByText(mlrTemplateVerbiage.link.text);
    expect(enterMlrButton).toBeVisible();
  });

  test("if mlrReport flag is false, MLR available verbiage should not be visible", async () => {
    mockLDFlags.set({ mlrReport: false });
    render(mlrTemplateCardComponent);
    expect(
      screen.queryByText(mlrTemplateVerbiage.link.text)
    ).not.toBeInTheDocument();
  });
});

describe("Test naaarReport feature flag functionality", () => {
  test("if naaarReport flag is true, NAAAR available verbiage should be visible", async () => {
    mockLDFlags.set({ naaarReport: true });
    render(naaarTemplateCardComponent);
    expect(
      screen.getByText(naaarTemplateVerbiage.body.available)
    ).toBeVisible();
    const enterNaaarButton = screen.getByText(naaarTemplateVerbiage.link.text);
    expect(enterNaaarButton).toBeVisible();
  });

  test("if naaarReport flag is false, NAAAR available verbiage should not be visible", async () => {
    mockLDFlags.set({ naaarReport: false });
    render(naaarTemplateCardComponent);
    expect(
      screen.queryByText(naaarTemplateVerbiage.link.text)
    ).not.toBeInTheDocument();
  });
});

describe("Test TemplateCard accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(mcparTemplateCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
