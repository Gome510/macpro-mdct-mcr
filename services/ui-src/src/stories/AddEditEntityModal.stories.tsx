import { AddEditEntityModal as AddEditEntityModalComponent } from "../components/modals/AddEditEntityModal.tsx";

export default {
  title: "AddEditEntityModal",
  component: AddEditEntityModalComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AddEditEntityModal = (args: any) => {
  return <AddEditEntityModalComponent {...args} />;
};
