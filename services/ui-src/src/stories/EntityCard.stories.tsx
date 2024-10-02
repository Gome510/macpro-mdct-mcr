import { EntityCard as EntityCardComponent } from "../components/cards/EntityCard/EntityCard.tsx";

export default {
  title: 'EntityCard',
  component: EntityCardComponent,
  argTypes: {
    entityIndex: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    }
  },
  args: {
    entity: undefined,
    entityIndex: 0,
    entityType: 'Sample Text',
    formattedEntityData: undefined,
    verbiage: undefined,
    openAddEditEntityModal: undefined,
    openDeleteEntityModal: undefined,
    openDrawer: undefined,
    printVersion: true,
  },
};

export const EntityCard = (args: any) => {
  return <EntityCardComponent {...args} />;
};