import { DashboardPage as DashboardPageComponent } from "../components/pages/Dashboard/DashboardPage.tsx";

export default {
  title: "DashboardPage",
  component: DashboardPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DashboardPage = (args: any) => {
  return <DashboardPageComponent {...args} />;
};
