import { StatusTable as StatusTableComponent } from "../components/statusing/StatusTable.tsx";

export default {
  title: 'StatusTable',
  component: StatusTableComponent,
  argTypes: {

  },
  args: {

  },
};

export const StatusTable = (args: any) => {
  return <StatusTableComponent {...args} />;
};