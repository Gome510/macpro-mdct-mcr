import { ExportedReportFieldRow as ExportedReportFieldRowComponent } from "../components/export/ExportedReportFieldRow.tsx";

export default {
  title: "ExportedReportFieldRow",
  component: ExportedReportFieldRowComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedReportFieldRow = (args: any) => {
  return <ExportedReportFieldRowComponent {...args} />;
};
