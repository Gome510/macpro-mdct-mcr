import { AddEditReportModal as AddEditReportModalComponent } from "../components/modals/AddEditReportModal.tsx";
import { States } from "../constants";

export default {
  title: 'AddEditReportModal',
  component: AddEditReportModalComponent,
  argTypes: {
    activeState: { 
      control: 'select',
      options: Object.values(States)
     },
    reportType: { 
      control: 'select',
      options: ['MCPAR', 'MLR']
     },
  },
  args: {
    activeState: Object.values(States)[0],
    reportType: 'MCPAR',
    selectedEntity: {
      id: 'sampleEntityId',
      name: 'Sample Entity Name',
    },
    modalDisclosure: {
      isOpen: true,
      onClose: () => {},
    },
  },
};

export const AddEditReportModal = (args: any) => {
  return <AddEditReportModalComponent {...args} />;
};