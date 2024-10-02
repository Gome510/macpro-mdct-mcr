import { DateField as DateFieldComponent } from "../components/fields/DateField.tsx";

export default {
  title: 'DateField',
  component: DateFieldComponent,
  argTypes: {

  },
  args: {
    name: 'Sample Text',
    label: 'Sample Text',
    hint: [],
    timetype: 'Sample Text',
    nested: true,
    autosave: true,
    validateOnRender: true,
    sxOverride: undefined,
    styleAsOptional: true,
    clear: true,
  },
};

export const DateField = (args: any) => {
  return <DateFieldComponent {...args} />;
};