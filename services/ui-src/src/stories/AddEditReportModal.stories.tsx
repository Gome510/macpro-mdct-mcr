import { AddEditReportModal as AddEditReportModalComponent } from "../components/modals/AddEditReportModal.tsx";

export default {
  title: 'AddEditReportModal',
  component: AddEditReportModalComponent,
  argTypes: {

  },
  args: {
    activeState: 'Sample Text',
    reportType: 'Sample Text',
    selectedReport: undefined,
    modalDisclosure: undefined,
  },
};

export const AddEditReportModal = (args: any) => {
  return <AddEditReportModalComponent {...args} />;
};