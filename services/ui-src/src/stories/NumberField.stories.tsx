import { NumberField as NumberFieldComponent } from "../components/fields/NumberField.tsx";

export default {
  title: 'NumberField',
  component: NumberFieldComponent,
  argTypes: {

  },
  args: {

  },
};

export const NumberField = (args: any) => {
  return <NumberFieldComponent {...args} />;
};