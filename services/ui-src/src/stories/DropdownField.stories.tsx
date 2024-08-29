import { DropdownField as DropdownFieldComponent } from "../components/fields/DropdownField.tsx";

export default {
  title: "DropdownField",
  component: DropdownFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DropdownField = (args: any) => {
  return <DropdownFieldComponent {...args} />;
};
