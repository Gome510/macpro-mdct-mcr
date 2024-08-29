import { ReportPageFooter as ReportPageFooterComponent } from "../components/reports/ReportPageFooter.tsx";

export default {
  title: "ReportPageFooter",
  component: ReportPageFooterComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportPageFooter = (args: any) => {
  return <ReportPageFooterComponent {...args} />;
};
