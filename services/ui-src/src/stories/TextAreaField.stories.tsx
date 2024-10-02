import { TextAreaField as TextAreaFieldComponent } from "../components/fields/TextAreaField.tsx";

export default {
  title: 'TextAreaField',
  component: TextAreaFieldComponent,
  argTypes: {
    rows: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    }
  },
  args: {
    name: 'Sample Text',
    label: 'Sample Text',
    placeholder: 'Sample Text',
    rows: 0,
    clear: true,
  },
};

export const TextAreaField = (args: any) => {
  return <TextAreaFieldComponent {...args} />;
};