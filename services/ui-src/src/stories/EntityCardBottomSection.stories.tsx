import { EntityCardBottomSection as EntityCardBottomSectionComponent } from "../components/cards/EntityCard/EntityCardBottomSection.tsx";

export default {
  title: 'EntityCardBottomSection',
  component: EntityCardBottomSectionComponent,
  argTypes: {

  },
  args: {
    entityType: 'Sample Text',
    formattedEntityData: undefined,
    printVersion: true,
    verbiage: undefined,
  },
};

export const EntityCardBottomSection = (args: any) => {
  return <EntityCardBottomSectionComponent {...args} />;
};