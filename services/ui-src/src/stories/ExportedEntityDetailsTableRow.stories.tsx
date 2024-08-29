import { ExportedEntityDetailsTableRow as ExportedEntityDetailsTableRowComponent } from "../components/export/ExportedEntityDetailsTableRow.tsx";

export default {
  title: "ExportedEntityDetailsTableRow",
  component: ExportedEntityDetailsTableRowComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedEntityDetailsTableRow = (args: any) => {
  return <ExportedEntityDetailsTableRowComponent {...args} />;
};
