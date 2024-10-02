import { EntityCardTopSection as EntityCardTopSectionComponent } from "../components/cards/EntityCard/EntityCardTopSection.tsx";

export default {
  title: 'EntityCardTopSection',
  component: EntityCardTopSectionComponent,
  argTypes: {

  },
  args: {
    entityType: 'Sample Text',
    formattedEntityData: undefined,
    printVersion: true,
  },
};

export const EntityCardTopSection = (args: any) => {
  return <EntityCardTopSectionComponent {...args} />;
};