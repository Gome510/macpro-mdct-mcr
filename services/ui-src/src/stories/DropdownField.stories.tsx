import { DropdownField as DropdownFieldComponent } from "../components/fields/DropdownField.tsx";

export default {
  title: 'DropdownField',
  component: DropdownFieldComponent,
  argTypes: {

  },
  args: {
    name: 'Sample Text',
    label: 'Sample Text',
    hint: undefined,
    options: undefined,
    nested: true,
    autosave: true,
    validateOnRender: true,
    sxOverride: undefined,
    styleAsOptional: true,
  },
};

export const DropdownField = (args: any) => {
  return <DropdownFieldComponent {...args} />;
};