import { TextField as TextFieldComponent } from "../components/fields/TextField.tsx";

export default {
  title: "TextField",
  component: TextFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const TextField = (args: any) => {
  return <TextFieldComponent {...args} />;
};
