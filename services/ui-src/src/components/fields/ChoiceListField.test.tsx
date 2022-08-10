import { render } from "@testing-library/react";
import { axe } from "jest-axe";
//components
import { ChoiceListField } from "components";
import { formFieldFactory } from "utils";

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    register: () => {},
    setValue: () => {},
    getValues: () => {},
  }),
}));

jest.mock("utils", () => ({
  makeMediaQueryClasses: () => {},
  formFieldFactory: jest.fn(),
}));

const mockChoices = [
  { name: "Choice 1", label: "Choice 1", value: "A" },
  { name: "Choice 2", label: "Choice 2", value: "B" },
];

const mockNestedChildren = [
  {
    id: "test-nested-child",
    type: "text",
  },
];

const mockChoiceWithChild = {
  name: "Choice 3",
  label: "Choice 3",
  value: "C",
  children: mockNestedChildren,
};

const ChoiceListFieldCheckboxComponent = (
  <div data-testid="test-checkbox-list">
    <ChoiceListField
      choices={mockChoices}
      label="Checkbox example"
      name="checkbox_choices"
      type="checkbox"
      onChangeHandler={() => jest.fn()}
    />
  </div>
);

const ChoiceListFieldRadioComponent = (
  <div data-testid="test-radio-list">
    <ChoiceListField
      choices={mockChoices}
      label="Radio example"
      name="radio_choices"
      type="radio"
      onChangeHandler={() => jest.fn()}
    />
  </div>
);

const ChoiceListFieldWithNestedChildren = (
  <div data-testid="test-radio-list">
    <ChoiceListField
      choices={[...mockChoices, mockChoiceWithChild]}
      label="Radio example"
      name="radio_choices"
      type="radio"
      onChangeHandler={() => jest.fn()}
    />
  </div>
);

describe("Test ChoiceList component choice rendering", () => {
  it("Should render nested child fields for choices with children", () => {
    render(ChoiceListFieldWithNestedChildren);
    expect(formFieldFactory).toHaveBeenCalledWith(mockNestedChildren, true);
  });
});

describe("Test ChoiceList accessibility", () => {
  it("Should not have basic accessibility issues when given checkbox", async () => {
    const { container } = render(ChoiceListFieldCheckboxComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues when given radio", async () => {
    const { container } = render(ChoiceListFieldRadioComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
