import { ReportDrawer as ReportDrawerComponent } from "../components/drawers/ReportDrawer.tsx";

export default {
  title: 'ReportDrawer',
  component: ReportDrawerComponent,
  argTypes: {

  },
  args: {
    selectedEntity: undefined,
    verbiage: undefined,
    form: undefined,
    onSubmit: undefined,
    entityType: undefined,
    submitting: true,
    drawerDisclosure: undefined,
    validateOnRender: true,
  },
};

export const ReportDrawer = (args: any) => {
  return <ReportDrawerComponent {...args} />;
};