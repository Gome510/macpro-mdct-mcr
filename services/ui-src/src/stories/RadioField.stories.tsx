import { RadioField as RadioFieldComponent } from "../components/fields/RadioField.tsx";

export default {
  title: "RadioField",
  component: RadioFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const RadioField = (args: any) => {
  return <RadioFieldComponent {...args} />;
};
