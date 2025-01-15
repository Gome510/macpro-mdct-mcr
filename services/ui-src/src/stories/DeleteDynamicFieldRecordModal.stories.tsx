import { entityTypes } from "types/formFields.js";
import { DeleteDynamicFieldRecordModal as DeleteDynamicFieldRecordModalComponent } from "../components/modals/DeleteDynamicFieldRecordModal.tsx";

export default {
  title: 'DeleteDynamicFieldRecordModal',
  component: DeleteDynamicFieldRecordModalComponent,
  argTypes: {
    entityType: {
      type: "select",
      options: entityTypes
    }
  },
  args: {
    isOpen: true,
    selectedRecord: undefined,
    deleteRecord: undefined,
    entityType: entityTypes[0],
    onClose: undefined
  },
};

export const DeleteDynamicFieldRecordModal = (args: any) => {
  return <DeleteDynamicFieldRecordModalComponent
    {...args} 
    modalDisclosure={{isOpen: args.isOpen, onClose: undefined}} 
  />;
};