import { MobileEntityRow as MobileEntityRowComponent } from "../components/tables/MobileEntityRow.tsx";

export default {
  title: "MobileEntityRow",
  component: MobileEntityRowComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const MobileEntityRow = (args: any) => {
  return <MobileEntityRowComponent {...args} />;
};
