import { Header as HeaderComponent } from "../components/layout/Header.tsx";

export default {
  title: "Header",
  component: HeaderComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Header = (args: any) => {
  return <HeaderComponent {...args} />;
};
