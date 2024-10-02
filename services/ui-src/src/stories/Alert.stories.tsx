import { Alert as AlertComponent } from "../components/alerts/Alert.tsx";

export default {
  title: 'Alert',
  component: AlertComponent,
  argTypes: {

  },
  args: {
    status: undefined,
    title: 'Sample Text',
    description: 'Sample Text',
    link: 'Sample Text',
    showIcon: true,
  },
};

export const Alert = (args: any) => {
  return <AlertComponent {...args} />;
};