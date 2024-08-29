import { DrawerReportPage as DrawerReportPageComponent } from "../components/reports/DrawerReportPage.tsx";

export default {
  title: "DrawerReportPage",
  component: DrawerReportPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const DrawerReportPage = (args: any) => {
  return <DrawerReportPageComponent {...args} />;
};
