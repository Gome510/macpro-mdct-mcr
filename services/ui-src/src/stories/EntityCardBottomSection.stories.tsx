import { EntityCardBottomSection as EntityCardBottomSectionComponent } from "../components/cards/EntityCard/EntityCardBottomSection.tsx";

export default {
  title: "EntityCardBottomSection",
  component: EntityCardBottomSectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityCardBottomSection = (args: any) => {
  return <EntityCardBottomSectionComponent {...args} />;
};
