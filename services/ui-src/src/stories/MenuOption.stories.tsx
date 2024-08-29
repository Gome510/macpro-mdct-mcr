import { MenuOption as MenuOptionComponent } from "../components/menus/MenuOption.tsx";

export default {
  title: "MenuOption",
  component: MenuOptionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const MenuOption = (args: any) => {
  return <MenuOptionComponent {...args} />;
};
