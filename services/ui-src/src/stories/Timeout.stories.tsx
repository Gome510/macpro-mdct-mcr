import { Timeout as TimeoutComponent } from "../components/layout/Timeout.tsx";

export default {
  title: "Timeout",
  component: TimeoutComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Timeout = (args: any) => {
  return <TimeoutComponent {...args} />;
};
