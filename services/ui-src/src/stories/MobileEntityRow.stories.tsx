import { MobileEntityRow as MobileEntityRowComponent } from "../components/tables/MobileEntityRow.tsx";

export default {
  title: 'MobileEntityRow',
  component: MobileEntityRowComponent,
  argTypes: {

  },
  args: {
    entity: undefined,
    verbiage: undefined,
    locked: true,
    entering: true,
    openAddEditEntityModal: undefined,
    openDeleteEntityModal: undefined,
    openEntityDetailsOverlay: undefined,
  },
};

export const MobileEntityRow = (args: any) => {
  return <MobileEntityRowComponent {...args} />;
};