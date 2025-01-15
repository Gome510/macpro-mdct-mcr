import { entityTypes } from "types/formFields.js";
import { DeleteEntityModal as DeleteEntityModalComponent } from "../components/modals/DeleteEntityModal.tsx";

export default {
  title: 'DeleteEntityModal',
  component: DeleteEntityModalComponent,
  argTypes: {
    entityType:{
      type: "select",
      options: entityTypes
    }
  },
  args: {
    isOpen: true,
    entityType: entityTypes[0],
    selectedEntity: undefined,
    deleteModalTitle: "Sample Text",
    deleteModalConfirmButtonText: "Sample Text",
    deleteModalWarning: "Sample Text",
    onClose: undefined,
  },
};

export const DeleteEntityModal = (args: any) => {
  return <DeleteEntityModalComponent 
    {...args} 
    modalDisclosure={{isOpen: args.isOpen, onClose: undefined}} 
    verbiage={{
      deleteModalTitle: args.deleteModalTitle,
      deleteModalConfirmButtonText: args.deleteModalConfirmButtonText,
      deleteModalWarning: args.deleteModalWarning
    }}
  />;
};