import { AddEditEntityModal as AddEditEntityModalComponent } from "../components/modals/AddEditEntityModal.tsx";

export default {
  title: 'AddEditEntityModal',
  component: AddEditEntityModalComponent,
  argTypes: {

  },
  args: {
    entityType: 'Sample Text',
    form: undefined,
    verbiage: undefined,
    selectedEntity: undefined,
    modalDisclosure: undefined,
  },
};

export const AddEditEntityModal = (args: any) => {
  return <AddEditEntityModalComponent {...args} />;
};