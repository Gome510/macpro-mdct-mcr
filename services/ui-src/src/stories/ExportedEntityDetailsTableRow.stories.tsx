import { ExportedEntityDetailsTableRow as ExportedEntityDetailsTableRowComponent } from "../components/export/ExportedEntityDetailsTableRow.tsx";

export default {
  title: 'ExportedEntityDetailsTableRow',
  component: ExportedEntityDetailsTableRowComponent,
  argTypes: {

  },
  args: {
    formField: undefined,
    pageType: 'Sample Text',
    entityId: 'Sample Text',
    entityType: 'Sample Text',
    parentFieldCheckedChoiceIds: [],
    showHintText: true,
    optional: true,
  },
};

export const ExportedEntityDetailsTableRow = (args: any) => {
  return <ExportedEntityDetailsTableRowComponent {...args} />;
};