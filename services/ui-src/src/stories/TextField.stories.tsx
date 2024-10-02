import { TextField as TextFieldComponent } from "../components/fields/TextField.tsx";

export default {
  title: 'TextField',
  component: TextFieldComponent,
  argTypes: {

  },
  args: {
    name: 'Sample Text',
    label: 'Sample Text',
    hint: [],
    placeholder: 'Sample Text',
    sxOverride: undefined,
    nested: true,
    validateOnRender: true,
    autosave: true,
    styleAsOptional: true,
    clear: true,
  },
};

export const TextField = (args: any) => {
  return <TextFieldComponent {...args} />;
};