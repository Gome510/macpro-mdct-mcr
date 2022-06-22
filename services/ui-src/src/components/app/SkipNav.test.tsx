import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
//components
import { SkipNav } from "components";

const skipNavComponent = (
  <SkipNav
    id="skip-nav-test"
    href="#main-content"
    text="Test text"
    data-testid="skip-nav-test"
  />
);

describe("Test SkipNav component", () => {
  test("SkipNav is visible and focusable", async () => {
    render(skipNavComponent);
    const skipNavContainer = document.getElementById("skip-nav-test")!;
    skipNavContainer.focus();
    await userEvent.tab();

    const skipNavLink = screen.getByText("Test text");
    await expect(skipNavLink).toHaveFocus();
    await expect(skipNavLink).toBeVisible();
  });
});

describe("Test SkipNav accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(skipNavComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
