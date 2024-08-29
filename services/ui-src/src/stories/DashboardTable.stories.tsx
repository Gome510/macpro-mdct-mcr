import { DashboardTable as DashboardTableComponent } from "../components/pages/Dashboard/DashboardTable.tsx";

export default {
  title: "DashboardTable",
  component: DashboardTableComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DashboardTable = (args: any) => {
  return <DashboardTableComponent {...args} />;
};
