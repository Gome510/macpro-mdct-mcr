import { Modal as ModalComponent } from "../components/modals/Modal.tsx";

export default {
  title: "Modal",
  component: ModalComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Modal = (args: any) => {
  return <ModalComponent {...args} />;
};
