import { AddEditEntityModal as AddEditEntityModalComponent } from "../components/modals/AddEditEntityModal";

export default {
  title: 'AddEditEntityModal',
  component: AddEditEntityModalComponent,
  argTypes: {
    entityType: { control: 'text' },
    form: { control: 'object' },
    verbiage: { control: 'object' },
    selectedEntity: { control: 'object' },
    modalDisclosure: { control: 'object' },
  },
  args: {
    entityType: 'Sample Entity Type',
    form: {
      id: 'sampleForm',
      fields: [
        {
          id: 'sampleField',
          type: 'text',
          validation: 'text',
          props: {
            label: 'Sample Field',
            placeholder: 'Enter text',
          },
        },
      ],
    },
    verbiage: {
      title: 'Sample Title',
      description: 'Sample description text.',
    },
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

export const AddEditEntityModal = (args: any) => {
  return <AddEditEntityModalComponent {...args} />;
};