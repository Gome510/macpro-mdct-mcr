import { StandardReportPage as StandardReportPageComponent } from "../components/reports/StandardReportPage.tsx";

export default {
  title: 'StandardReportPage',
  component: StandardReportPageComponent,
  argTypes: {

  },
  args: {
    route: undefined,
    validateOnRender: true,
  },
};

export const StandardReportPage = (args: any) => {
  return <StandardReportPageComponent {...args} />;
};