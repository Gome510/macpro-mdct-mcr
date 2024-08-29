import { Drawer as DrawerComponent } from "../components/drawers/Drawer.tsx";

export default {
  title: "Drawer",
  component: DrawerComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Drawer = (args: any) => {
  return <DrawerComponent {...args} />;
};
