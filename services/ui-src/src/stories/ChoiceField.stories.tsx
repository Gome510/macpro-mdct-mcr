import { ChoiceField as ChoiceFieldComponent } from "../components/fields/ChoiceField.tsx";

export default {
  title: 'ChoiceField',
  component: ChoiceFieldComponent,
  argTypes: {

  },
  args: {
    name: 'Sample Text',
    label: 'Sample Text',
    hint: 'Sample Text',
    sxOverride: undefined,
    styleAsOptional: true,
  },
};

export const ChoiceField = (args: any) => {
  return <ChoiceFieldComponent {...args} />;
};