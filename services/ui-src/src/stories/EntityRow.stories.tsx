import { EntityRow as EntityRowComponent } from "../components/tables/EntityRow.tsx";

export default {
  title: 'EntityRow',
  component: EntityRowComponent,
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

export const EntityRow = (args: any) => {
  return <EntityRowComponent {...args} />;
};