import { EntityStatusIcon as EntityStatusIconComponent } from "../components/tables/EntityStatusIcon.tsx";

export default {
  title: "EntityStatusIcon",
  component: EntityStatusIconComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityStatusIcon = (args: any) => {
  return <EntityStatusIconComponent {...args} />;
};
