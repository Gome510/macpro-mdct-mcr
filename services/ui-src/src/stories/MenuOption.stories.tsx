import { MenuOption as MenuOptionComponent } from "../components/menus/MenuOption.tsx";

export default {
  title: 'MenuOption',
  component: MenuOptionComponent,
  argTypes: {

  },
  args: {
    text: 'Sample Text',
    icon: 'Sample Text',
    altText: 'Sample Text',
    role: 'Sample Text',
    hideText: true,
  },
};

export const MenuOption = (args: any) => {
  return <MenuOptionComponent {...args} />;
};