import { Menu as MenuComponent } from "../components/menus/Menu.tsx";

export default {
  title: 'Menu',
  component: MenuComponent,
  argTypes: {

  },
  args: {
    handleLogout: undefined,
  },
};

export const Menu = (args: any) => {
  return <MenuComponent {...args} />;
};