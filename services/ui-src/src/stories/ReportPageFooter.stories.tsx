import { ReportPageFooter as ReportPageFooterComponent } from "../components/reports/ReportPageFooter.tsx";

export default {
  title: 'ReportPageFooter',
  component: ReportPageFooterComponent,
  argTypes: {

  },
  args: {
    form: undefined,
    submitting: true,
    praDisclosure: [],
  },
};

export const ReportPageFooter = (args: any) => {
  return <ReportPageFooterComponent {...args} />;
};