import { ChoiceField as ChoiceFieldComponent } from "../components/fields/ChoiceField.tsx";

export default {
  title: "ChoiceField",
  component: ChoiceFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ChoiceField = (args: any) => {
  return <ChoiceFieldComponent {...args} />;
};
