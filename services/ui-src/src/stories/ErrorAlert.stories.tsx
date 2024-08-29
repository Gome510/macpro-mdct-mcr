import { ErrorAlert as ErrorAlertComponent } from "../components/alerts/ErrorAlert.tsx";

export default {
  title: "ErrorAlert",
  component: ErrorAlertComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ErrorAlert = (args: any) => {
  return <ErrorAlertComponent {...args} />;
};
