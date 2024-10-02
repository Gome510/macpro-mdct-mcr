import { Modal as ModalComponent } from "../components/modals/Modal.tsx";

export default {
  title: 'Modal',
  component: ModalComponent,
  argTypes: {

  },
  args: {
    modalDisclosure: undefined,
    content: undefined,
    submitting: true,
    onConfirmHandler: undefined,
    formId: 'Sample Text',
    children: undefined,
  },
};

export const Modal = (args: any) => {
  return <ModalComponent {...args} />;
};