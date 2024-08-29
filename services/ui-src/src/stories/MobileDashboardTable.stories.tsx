import { MobileDashboardTable as MobileDashboardTableComponent } from "../components/pages/Dashboard/MobileDashboardTable.tsx";

export default {
  title: "MobileDashboardTable",
  component: MobileDashboardTableComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const MobileDashboardTable = (args: any) => {
  return <MobileDashboardTableComponent {...args} />;
};
