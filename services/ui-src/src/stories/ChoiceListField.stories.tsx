import { ChoiceListField as ChoiceListFieldComponent } from "../components/fields/ChoiceListField.tsx";

export default {
  title: "ChoiceListField",
  component: ChoiceListFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ChoiceListField = (args: any) => {
  return <ChoiceListFieldComponent {...args} />;
};
