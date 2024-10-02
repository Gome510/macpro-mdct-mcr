import { ExportedReportWrapper as ExportedReportWrapperComponent } from "../components/export/ExportedReportWrapper.tsx";

export default {
  title: 'ExportedReportWrapper',
  component: ExportedReportWrapperComponent,
  argTypes: {

  },
  args: {
    section: undefined,
  },
};

export const ExportedReportWrapper = (args: any) => {
  return <ExportedReportWrapperComponent {...args} />;
};