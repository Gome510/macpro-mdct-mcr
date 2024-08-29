import { DynamicField as DynamicFieldComponent } from "../components/fields/DynamicField.tsx";

export default {
  title: "DynamicField",
  component: DynamicFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DynamicField = (args: any) => {
  return <DynamicFieldComponent {...args} />;
};
