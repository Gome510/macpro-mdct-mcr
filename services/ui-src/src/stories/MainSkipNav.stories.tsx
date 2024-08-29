import { MainSkipNav as MainSkipNavComponent } from "../components/app/MainSkipNav.tsx";

export default {
  title: "MainSkipNav",
  component: MainSkipNavComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const MainSkipNav = (args: any) => {
  return <MainSkipNavComponent {...args} />;
};
