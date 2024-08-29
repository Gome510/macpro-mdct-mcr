import { ReportGetStartedPage as ReportGetStartedPageComponent } from "../components/pages/GetStarted/ReportGetStartedPage.tsx";

export default {
  title: "ReportGetStartedPage",
  component: ReportGetStartedPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportGetStartedPage = (args: any) => {
  return <ReportGetStartedPageComponent {...args} />;
};
