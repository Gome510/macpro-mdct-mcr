import { ModalDrawerReportPage as ModalDrawerReportPageComponent } from "../components/reports/ModalDrawerReportPage.tsx";

export default {
  title: 'ModalDrawerReportPage',
  component: ModalDrawerReportPageComponent,
  argTypes: {

  },
  args: {
    route: undefined,
    validateOnRender: true,
  },
};

export const ModalDrawerReportPage = (args: any) => {
  return <ModalDrawerReportPageComponent {...args} />;
};