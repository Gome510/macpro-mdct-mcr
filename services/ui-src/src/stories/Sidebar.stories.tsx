import { Sidebar as SidebarComponent } from "../components/menus/Sidebar.tsx";

export default {
  title: 'Sidebar',
  component: SidebarComponent,
  argTypes: {

  },
  args: {

  },
};

export const Sidebar = (args: any) => {
  return <SidebarComponent {...args} />;
};