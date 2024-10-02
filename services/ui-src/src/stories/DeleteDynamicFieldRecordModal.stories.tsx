import { DeleteDynamicFieldRecordModal as DeleteDynamicFieldRecordModalComponent } from "../components/modals/DeleteDynamicFieldRecordModal.tsx";

export default {
  title: 'DeleteDynamicFieldRecordModal',
  component: DeleteDynamicFieldRecordModalComponent,
  argTypes: {

  },
  args: {
    selectedRecord: undefined,
    deleteRecord: undefined,
    entityType: undefined,
    modalDisclosure: undefined,
  },
};

export const DeleteDynamicFieldRecordModal = (args: any) => {
  return <DeleteDynamicFieldRecordModalComponent {...args} />;
};