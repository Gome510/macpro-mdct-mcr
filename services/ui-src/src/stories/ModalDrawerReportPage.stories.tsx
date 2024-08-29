import { ModalDrawerReportPage as ModalDrawerReportPageComponent } from "../components/reports/ModalDrawerReportPage.tsx";

export default {
  title: "ModalDrawerReportPage",
  component: ModalDrawerReportPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ModalDrawerReportPage = (args: any) => {
  return <ModalDrawerReportPageComponent {...args} />;
};
