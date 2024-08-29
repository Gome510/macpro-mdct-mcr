import { Alert as AlertComponent } from "../components/alerts/Alert.tsx";

export default {
  title: "Alert",
  component: AlertComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Alert = (args: any) => {
  return <AlertComponent {...args} />;
};
