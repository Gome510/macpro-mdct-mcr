import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
// components
import { ReportContext, ReportPageWrapper } from "components";
// utils
import {
  mockReport,
  mockReportContext,
  mockReportJsonFlatRoutes,
  mockStateUser,
  RouterWrappedComponent,
} from "utils/testing/setupJest";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
  useLocation: jest.fn(() => ({
    pathname: "/mock/mock-route-2",
  })),
}));

jest.mock("utils", () => ({
  ...jest.requireActual("utils"),
  useUser: () => mockStateUser,
}));

const ReportPageWrapper_StandardPage = (
  <RouterWrappedComponent>
    <ReportContext.Provider value={mockReportContext}>
      <ReportPageWrapper route={mockReportJsonFlatRoutes.routes[0]} />
    </ReportContext.Provider>
  </RouterWrappedComponent>
);

const ReportPageWrapper_Drawer = (
  <RouterWrappedComponent>
    <ReportContext.Provider value={mockReportContext}>
      <ReportPageWrapper route={mockReportJsonFlatRoutes.routes[1]} />
    </ReportContext.Provider>
  </RouterWrappedComponent>
);

const ReportPageWrapper_ModalDrawer = (
  <RouterWrappedComponent>
    <ReportContext.Provider value={mockReportContext}>
      <ReportPageWrapper route={mockReportJsonFlatRoutes.routes[2]} />
    </ReportContext.Provider>
  </RouterWrappedComponent>
);

const mockedNoReport = {
  ...mockReport,
  id: "",
};
const mockReportContextWithoutReport = {
  ...mockReportContext,
  report: mockedNoReport,
};

const ReportPageWrapper_WithoutReport = (
  <RouterWrappedComponent>
    <ReportContext.Provider value={mockReportContextWithoutReport}>
      <ReportPageWrapper route={mockReportJsonFlatRoutes.routes[0]} />
    </ReportContext.Provider>
  </RouterWrappedComponent>
);

describe("Test ReportPageWrapper view", () => {
  test("ReportPageWrapper StandardFormSection view renders", () => {
    render(ReportPageWrapper_StandardPage);
    expect(screen.getByTestId("standard-page")).toBeVisible();
  });

  test("ReportPageWrapper DrawerSection view renders", () => {
    render(ReportPageWrapper_Drawer);
    expect(screen.getByTestId("drawer")).toBeVisible();
  });
});

test("ReportPageWrapper ModalDrawerReportPage view renders", () => {
  render(ReportPageWrapper_ModalDrawer);
  expect(screen.getByTestId("dynamic-drawer-section")).toBeVisible();
});

describe("Test ReportPageWrapper functionality", () => {
  afterEach(() => jest.clearAllMocks());

  test("ReportPageWrapper navigates to dashboard if no id", () => {
    render(ReportPageWrapper_WithoutReport);
    expect(mockUseNavigate).toHaveBeenCalledWith("/mcpar");
  });
});

describe("Test ReportPageWrapper accessibility", () => {
  test("Standard page should not have basic accessibility issues", async () => {
    const { container } = render(ReportPageWrapper_StandardPage);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("Drawer page should not have basic accessibility issues", async () => {
    const { container } = render(ReportPageWrapper_Drawer);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("ModalDrawer should not have basic accessibility issues", async () => {
    const { container } = render(ReportPageWrapper_ModalDrawer);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});