import { ExportedReportMetadataTable as ExportedReportMetadataTableComponent } from "../components/export/ExportedReportMetadataTable.tsx";

export default {
  title: 'ExportedReportMetadataTable',
  component: ExportedReportMetadataTableComponent,
  argTypes: {

  },
  args: {
    reportType: undefined,
    verbiage: undefined,
  },
};

export const ExportedReportMetadataTable = (args: any) => {
  return <ExportedReportMetadataTableComponent {...args} />;
};