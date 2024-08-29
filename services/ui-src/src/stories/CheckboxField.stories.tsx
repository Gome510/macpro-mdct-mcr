import { CheckboxField as CheckboxFieldComponent } from "../components/fields/CheckboxField.tsx";

export default {
  title: "CheckboxField",
  component: CheckboxFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const CheckboxField = (args: any) => {
  return <CheckboxFieldComponent {...args} />;
};
