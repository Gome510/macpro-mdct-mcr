import { DateField as DateFieldComponent } from "../components/fields/DateField.tsx";

export default {
  title: "DateField",
  component: DateFieldComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DateField = (args: any) => {
  return <DateFieldComponent {...args} />;
};
