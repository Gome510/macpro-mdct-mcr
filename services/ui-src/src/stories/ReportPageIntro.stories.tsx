import { ReportPageIntro as ReportPageIntroComponent } from "../components/reports/ReportPageIntro.tsx";

export default {
  title: 'ReportPageIntro',
  component: ReportPageIntroComponent,
  argTypes: {

  },
  args: {
    text: undefined,
    accordion: undefined,
    reportType: 'Sample Text',
  },
};

export const ReportPageIntro = (args: any) => {
  return <ReportPageIntroComponent {...args} />;
};