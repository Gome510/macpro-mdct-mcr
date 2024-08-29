import { ReportPageWrapper as ReportPageWrapperComponent } from "../components/reports/ReportPageWrapper.tsx";

export default {
  title: "ReportPageWrapper",
  component: ReportPageWrapperComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportPageWrapper = (args: any) => {
  return <ReportPageWrapperComponent {...args} />;
};
