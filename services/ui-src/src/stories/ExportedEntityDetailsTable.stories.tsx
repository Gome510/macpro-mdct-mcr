import { ExportedEntityDetailsTable as ExportedEntityDetailsTableComponent } from "../components/export/ExportedEntityDetailsTable.tsx";

export default {
  title: "ExportedEntityDetailsTable",
  component: ExportedEntityDetailsTableComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedEntityDetailsTable = (args: any) => {
  return <ExportedEntityDetailsTableComponent {...args} />;
};
