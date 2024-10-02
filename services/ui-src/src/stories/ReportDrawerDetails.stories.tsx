import { ReportDrawerDetails as ReportDrawerDetailsComponent } from "../components/drawers/ReportDrawerDetails.tsx";

export default {
  title: 'ReportDrawerDetails',
  component: ReportDrawerDetailsComponent,
  argTypes: {

  },
  args: {
    entityType: undefined,
    drawerDetails: undefined,
  },
};

export const ReportDrawerDetails = (args: any) => {
  return <ReportDrawerDetailsComponent {...args} />;
};