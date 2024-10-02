import { DeleteEntityModal as DeleteEntityModalComponent } from "../components/modals/DeleteEntityModal.tsx";

export default {
  title: 'DeleteEntityModal',
  component: DeleteEntityModalComponent,
  argTypes: {

  },
  args: {
    entityType: 'Sample Text',
    selectedEntity: undefined,
    verbiage: undefined,
    modalDisclosure: undefined,
  },
};

export const DeleteEntityModal = (args: any) => {
  return <DeleteEntityModalComponent {...args} />;
};