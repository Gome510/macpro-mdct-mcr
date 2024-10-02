import { ExportedReportBanner as ExportedReportBannerComponent } from "../components/export/ExportedReportBanner.tsx";

export default {
  title: 'ExportedReportBanner',
  component: ExportedReportBannerComponent,
  argTypes: {

  },
  args: {

  },
};

export const ExportedReportBanner = (args: any) => {
  return <ExportedReportBannerComponent {...args} />;
};