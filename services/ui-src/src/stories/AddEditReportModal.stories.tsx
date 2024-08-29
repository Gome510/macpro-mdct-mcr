import { AddEditReportModal as AddEditReportModalComponent } from "../components/modals/AddEditReportModal.tsx";

export default {
  title: "AddEditReportModal",
  component: AddEditReportModalComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AddEditReportModal = (args: any) => {
  return <AddEditReportModalComponent {...args} />;
};
