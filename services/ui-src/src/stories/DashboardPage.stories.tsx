import { REPORT_TYPES } from "constants.js";
import { DashboardPage as DashboardPageComponent } from "../components/pages/Dashboard/DashboardPage.tsx";

export default {
  title: 'DashboardPage',
  component: DashboardPageComponent,
  argTypes: {
    reportType: {
      type: "select",
      options: Object.values(REPORT_TYPES)
    }
  },
  args: {
    reportType: 'Sample Text',
  },
};

export const DashboardPage = (args: any) => {
  return <DashboardPageComponent {...args} />;
};