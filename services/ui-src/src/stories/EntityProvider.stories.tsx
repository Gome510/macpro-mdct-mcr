import { EntityProvider as EntityProviderComponent } from "../components/reports/EntityProvider.tsx";

export default {
  title: "EntityProvider",
  component: EntityProviderComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityProvider = (args: any) => {
  return <EntityProviderComponent {...args} />;
};
