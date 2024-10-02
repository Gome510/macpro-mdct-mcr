import { ModalOverlayReportPage as ModalOverlayReportPageComponent } from "../components/reports/ModalOverlayReportPage.tsx";

export default {
  title: 'ModalOverlayReportPage',
  component: ModalOverlayReportPageComponent,
  argTypes: {

  },
  args: {
    route: undefined,
    setSidebarHidden: undefined,
    validateOnRender: true,
  },
};

export const ModalOverlayReportPage = (args: any) => {
  return <ModalOverlayReportPageComponent {...args} />;
};