import { ModalOverlayReportPage as ModalOverlayReportPageComponent } from "../components/reports/ModalOverlayReportPage.tsx";

export default {
  title: "ModalOverlayReportPage",
  component: ModalOverlayReportPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ModalOverlayReportPage = (args: any) => {
  return <ModalOverlayReportPageComponent {...args} />;
};
