import { TextAreaField as TextAreaFieldComponent } from "../components/fields/TextAreaField.tsx";

export default {
  title: "TextAreaField",
  component: TextAreaFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const TextAreaField = (args: any) => {
  return <TextAreaFieldComponent {...args} />;
};
