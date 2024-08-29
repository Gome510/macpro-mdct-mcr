import { ExportedReportPage as ExportedReportPageComponent } from "../components/pages/Export/ExportedReportPage.tsx";

export default {
  title: "ExportedReportPage",
  component: ExportedReportPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedReportPage = (args: any) => {
  return <ExportedReportPageComponent {...args} />;
};
