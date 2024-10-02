import { EntityStatusIcon as EntityStatusIconComponent } from "../components/tables/EntityStatusIcon.tsx";

export default {
  title: 'EntityStatusIcon',
  component: EntityStatusIconComponent,
  argTypes: {

  },
  args: {
    entity: undefined,
    isPdf: true,
  },
};

export const EntityStatusIcon = (args: any) => {
  return <EntityStatusIconComponent {...args} />;
};