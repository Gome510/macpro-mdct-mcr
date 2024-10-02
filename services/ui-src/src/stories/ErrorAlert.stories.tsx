import { ErrorAlert as ErrorAlertComponent } from "../components/alerts/ErrorAlert.tsx";

export default {
  title: 'ErrorAlert',
  component: ErrorAlertComponent,
  argTypes: {

  },
  args: {
    error: 'Sample Text',
    variant: 'Sample Text',
    sxOverride: undefined,
  },
};

export const ErrorAlert = (args: any) => {
  return <ErrorAlertComponent {...args} />;
};