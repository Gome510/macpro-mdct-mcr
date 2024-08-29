import { EntityCard as EntityCardComponent } from "../components/cards/EntityCard/EntityCard.tsx";

export default {
  title: "EntityCard",
  component: EntityCardComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityCard = (args: any) => {
  return <EntityCardComponent {...args} />;
};
