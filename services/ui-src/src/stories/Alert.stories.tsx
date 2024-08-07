import { Alert as AlertComponent } from "../components/alerts/Alert";
import { AlertTypes } from "types";
const meta = {
  title: "Alert",
  component: AlertComponent,
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: [...Object.values(AlertTypes)],
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    status: AlertTypes.INFO,
    title: "Alert Title",
    description: "description",
  },
};

export default meta;

export const Alert = (args: any) => {
  return <AlertComponent {...args} />;
};
