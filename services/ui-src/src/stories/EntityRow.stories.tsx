import { EntityRow as EntityRowComponent } from "../components/tables/EntityRow.tsx";

export default {
  title: "EntityRow",
  component: EntityRowComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityRow = (args: any) => {
  return <EntityRowComponent {...args} />;
};
