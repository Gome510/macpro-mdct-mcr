import { HelpPage as HelpPageComponent } from "../components/pages/Help/HelpPage.tsx";

export default {
  title: "HelpPage",
  component: HelpPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const HelpPage = (args: any) => {
  return <HelpPageComponent {...args} />;
};
