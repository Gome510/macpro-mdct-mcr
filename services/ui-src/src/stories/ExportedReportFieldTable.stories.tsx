import { ExportedReportFieldTable as ExportedReportFieldTableComponent } from "../components/export/ExportedReportFieldTable.tsx";

export default {
  title: "ExportedReportFieldTable",
  component: ExportedReportFieldTableComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedReportFieldTable = (args: any) => {
  return <ExportedReportFieldTableComponent {...args} />;
};
