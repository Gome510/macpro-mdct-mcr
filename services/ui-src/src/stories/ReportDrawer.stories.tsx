import { ReportDrawer as ReportDrawerComponent } from "../components/drawers/ReportDrawer.tsx";

export default {
  title: "ReportDrawer",
  component: ReportDrawerComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportDrawer = (args: any) => {
  return <ReportDrawerComponent {...args} />;
};
