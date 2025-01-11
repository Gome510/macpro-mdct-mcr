import { Alert as AlertComponent } from "../components/alerts/Alert.tsx";
import { AlertTypes } from "types";
const statuses = Object.values(AlertTypes)

export default {
  title: 'Alert',
  component: AlertComponent,
  argTypes: {
    status: {
      control: 'select',
      options: statuses
    }
  },
  args: {
    status: AlertTypes.INFO,
    title: 'Sample Text',
    description: 'Sample Text',
    link: 'Sample Text',
    showIcon: true,
  },
};

export const Alert = (args: any) => {
  return <AlertComponent {...args} />;
};