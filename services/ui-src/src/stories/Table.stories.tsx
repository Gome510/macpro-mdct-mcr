import { Table as TableComponent } from "../components/tables/Table.tsx";

export default {
  title: 'Table',
  component: TableComponent,
  argTypes: {

  },
  args: {
    content: undefined,
    variant: 'Sample Text',
    border: true,
    sxOverride: undefined,
    children: undefined,
  },
};

export const Table = (args: any) => {
  return <TableComponent {...args} />;
};