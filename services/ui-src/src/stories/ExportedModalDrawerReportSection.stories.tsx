import { ExportedModalDrawerReportSection as ExportedModalDrawerReportSectionComponent } from "../components/export/ExportedModalDrawerReportSection.tsx";

export default {
  title: "ExportedModalDrawerReportSection",
  component: ExportedModalDrawerReportSectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedModalDrawerReportSection = (args: any) => {
  return <ExportedModalDrawerReportSectionComponent {...args} />;
};
