import { ReportGetStartedPage as ReportGetStartedPageComponent } from "../components/pages/GetStarted/ReportGetStartedPage.tsx";

export default {
  title: 'ReportGetStartedPage',
  component: ReportGetStartedPageComponent,
  argTypes: {

  },
  args: {
    reportType: 'Sample Text',
  },
};

export const ReportGetStartedPage = (args: any) => {
  return <ReportGetStartedPageComponent {...args} />;
};