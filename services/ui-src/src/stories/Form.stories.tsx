import { Form as FormComponent } from "../components/forms/Form.tsx";

export default {
  title: "Form",
  component: FormComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Form = (args: any) => {
  return <FormComponent {...args} />;
};
