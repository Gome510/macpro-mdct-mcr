import { DrawerReportPage as DrawerReportPageComponent } from "../components/reports/DrawerReportPage.tsx";

export default {
  title: 'DrawerReportPage',
  component: DrawerReportPageComponent,
  argTypes: {

  },
  args: {
    route: undefined,
    validateOnRender: true,
  },
};

export const DrawerReportPage = (args: any) => {
  return <DrawerReportPageComponent {...args} />;
};