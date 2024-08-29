import { Table as TableComponent } from "../components/tables/Table.tsx";

export default {
  title: "Table",
  component: TableComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Table = (args: any) => {
  return <TableComponent {...args} />;
};
