import { SkipNav as SkipNavComponent } from "../components/app/SkipNav.tsx";

export default {
  title: "SkipNav",
  component: SkipNavComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const SkipNav = (args: any) => {
  return <SkipNavComponent {...args} />;
};
