import { ReportPageIntro as ReportPageIntroComponent } from "../components/reports/ReportPageIntro.tsx";

export default {
  title: "ReportPageIntro",
  component: ReportPageIntroComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportPageIntro = (args: any) => {
  return <ReportPageIntroComponent {...args} />;
};
