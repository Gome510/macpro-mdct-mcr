import { DeleteDynamicFieldRecordModal as DeleteDynamicFieldRecordModalComponent } from "../components/modals/DeleteDynamicFieldRecordModal.tsx";

export default {
  title: "DeleteDynamicFieldRecordModal",
  component: DeleteDynamicFieldRecordModalComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DeleteDynamicFieldRecordModal = (args: any) => {
  return <DeleteDynamicFieldRecordModalComponent {...args} />;
};
