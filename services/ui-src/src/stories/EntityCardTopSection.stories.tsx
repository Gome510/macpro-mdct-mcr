import { EntityCardTopSection as EntityCardTopSectionComponent } from "../components/cards/EntityCard/EntityCardTopSection.tsx";

export default {
  title: "EntityCardTopSection",
  component: EntityCardTopSectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityCardTopSection = (args: any) => {
  return <EntityCardTopSectionComponent {...args} />;
};
