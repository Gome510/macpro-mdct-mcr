import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
// components
import { EntityCard } from "components";
import { mockModalDrawerReportPageJson } from "utils/testing/setupJest";

const openAddEditEntityModal = jest.fn();
const openDeleteEntityModal = jest.fn();
const mockOpenDrawer = jest.fn();

const mockEntity = {
  id: "mock-id",
  accessMeasure_generalCategory: [
    {
      key: "option1",
      value: "mock-category",
    },
  ],
  accessMeasure_standardDescription: "mock-description",
  accessMeasure_standardType: [
    {
      key: "option1",
      value: "mock-type",
    },
  ],
  "accessMeasure_standardType-otherText": "",
};

const mockEntityType = "mock-entity-type";

const mockFormattedEntityData = {
  category: "mock-category",
  standardDescription: "mock-standardDescription",
  standardType: "mock-standardType",
  provider: "mock-providerType",
  region: "mock-applicableRegion",
  population: "mock-population",
  monitoringMethods: ["mock-monitoringMethod-1", "mock-monitoringMethod-2"],
  methodFrequency: "mock-oversightMethodFrequency",
};

const mockUnfinishedEntityData = {
  category: "mock-category",
  standardDescription: "mock-standardDescription",
  standardType: "mock-standardType",
};

const EntityCardComponent = (
  <EntityCard
    entity={mockEntity}
    entityType={mockEntityType}
    formattedEntityData={mockFormattedEntityData}
    dashboard={mockModalDrawerReportPageJson.dashboard}
    openAddEditEntityModal={openAddEditEntityModal}
    openDeleteEntityModal={openDeleteEntityModal}
    openDrawer={mockOpenDrawer}
    data-testid="mock-entity-card"
  />
);

const UnfinishedEntityCardComponent = (
  <EntityCard
    entity={mockEntity}
    entityType={mockEntityType}
    formattedEntityData={mockUnfinishedEntityData}
    dashboard={mockModalDrawerReportPageJson.dashboard}
    openAddEditEntityModal={openAddEditEntityModal}
    openDeleteEntityModal={openDeleteEntityModal}
    openDrawer={mockOpenDrawer}
  />
);

const AccessMeasuresEntityCardComponent = (
  <EntityCard
    entity={mockEntity}
    entityType={"accessMeasures"}
    formattedEntityData={mockFormattedEntityData}
    dashboard={mockModalDrawerReportPageJson.dashboard}
    openAddEditEntityModal={openAddEditEntityModal}
    openDeleteEntityModal={openDeleteEntityModal}
    openDrawer={mockOpenDrawer}
    data-testid="mock-entity-card"
  />
);

const SanctionsEntityCardComponent = (
  <EntityCard
    entity={mockEntity}
    entityType={"sanctions"}
    formattedEntityData={mockFormattedEntityData}
    dashboard={mockModalDrawerReportPageJson.dashboard}
    openAddEditEntityModal={openAddEditEntityModal}
    openDeleteEntityModal={openDeleteEntityModal}
    openDrawer={mockOpenDrawer}
    data-testid="mock-entity-card"
  />
);

const QualityMeasuresEntityCardComponent = (
  <EntityCard
    entity={mockEntity}
    entityType={"qualityMeasures"}
    formattedEntityData={mockFormattedEntityData}
    dashboard={mockModalDrawerReportPageJson.dashboard}
    openAddEditEntityModal={openAddEditEntityModal}
    openDeleteEntityModal={openDeleteEntityModal}
    openDrawer={mockOpenDrawer}
    data-testid="mock-entity-card"
  />
);

describe("Test Finished EntityCard", () => {
  beforeEach(() => {
    render(EntityCardComponent);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("EntityCard is visible", () => {
    expect(screen.getByTestId("entityCard")).toBeVisible();
  });

  test("Clicking edit button opens the AddEditProgramModal", async () => {
    const editEntityButton = screen.getByTestId("editEntityButton");
    expect(editEntityButton).toBeVisible();
    await userEvent.click(editEntityButton);
    await expect(openAddEditEntityModal).toBeCalledTimes(1);
  });

  test("Clicking 'Edit measure' button opens the AddEditProgramModal", async () => {
    const editMeasureButton = screen.getByText("Edit measure");
    expect(editMeasureButton).toBeVisible();
    await userEvent.click(editMeasureButton);
    expect(openAddEditEntityModal).toBeCalledTimes(1);
  });

  test("EntityCard opens the delete modal on remove click", async () => {
    const removeButton = screen.queryAllByTestId("deleteEntityButton")[0];
    await userEvent.click(removeButton);
    expect(openDeleteEntityModal).toBeCalledTimes(1);
  });

  test("EntityCard opens the drawer on edit-details click", async () => {
    const editDetailsButton = screen.queryAllByTestId("edit-details-button")[0];
    await userEvent.click(editDetailsButton);
    expect(mockOpenDrawer).toBeCalledTimes(1);
  });
});

describe("Test Unfinished EntityCard", () => {
  beforeEach(() => {
    render(UnfinishedEntityCardComponent);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("EntityCard is visible", () => {
    expect(screen.getByTestId("entityCard")).toBeVisible();
  });

  test("EntityCard opens the delete modal on remove click", async () => {
    const removeButton = screen.queryAllByTestId("deleteEntityButton")[0];
    await userEvent.click(removeButton);
    expect(openDeleteEntityModal).toBeCalledTimes(1);
  });

  test("EntityCard opens the drawer on enter-details click", async () => {
    const enterDetailsButton = screen.queryAllByTestId(
      "enter-details-button"
    )[0];
    await userEvent.click(enterDetailsButton);
    expect(mockOpenDrawer).toBeCalledTimes(1);
  });
});

describe("Test EntityCard accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(EntityCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues", async () => {
    const { container } = render(UnfinishedEntityCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues", async () => {
    const { container } = render(AccessMeasuresEntityCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues", async () => {
    const { container } = render(SanctionsEntityCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues", async () => {
    const { container } = render(QualityMeasuresEntityCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});