import { FormLayoutElements as FormLayoutElementsComponent } from "../components/forms/FormLayoutElements.tsx";

export default {
  title: "FormLayoutElements",
  component: FormLayoutElementsComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const FormLayoutElements = (args: any) => {
  return <FormLayoutElementsComponent {...args} />;
};
