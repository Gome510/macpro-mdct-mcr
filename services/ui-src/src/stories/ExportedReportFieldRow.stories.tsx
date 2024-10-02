import { ExportedReportFieldRow as ExportedReportFieldRowComponent } from "../components/export/ExportedReportFieldRow.tsx";

export default {
  title: 'ExportedReportFieldRow',
  component: ExportedReportFieldRowComponent,
  argTypes: {

  },
  args: {
    formField: undefined,
    pageType: 'Sample Text',
    entityType: 'Sample Text',
    parentFieldCheckedChoiceIds: [],
    showHintText: true,
  },
};

export const ExportedReportFieldRow = (args: any) => {
  return <ExportedReportFieldRowComponent {...args} />;
};