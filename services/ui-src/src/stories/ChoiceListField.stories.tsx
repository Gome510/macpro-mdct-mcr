import { ChoiceListField as ChoiceListFieldComponent } from "../components/fields/ChoiceListField.tsx";

export default {
  title: 'ChoiceListField',
  component: ChoiceListFieldComponent,
  argTypes: {

  },
  args: {
    name: 'Sample Text',
    type: 'Sample Text',
    label: 'Sample Text',
    choices: [],
    hint: [],
    nested: true,
    autosave: true,
    validateOnRender: true,
    sxOverride: undefined,
    styleAsOptional: true,
    clear: true,
  },
};

export const ChoiceListField = (args: any) => {
  return <ChoiceListFieldComponent {...args} />;
};