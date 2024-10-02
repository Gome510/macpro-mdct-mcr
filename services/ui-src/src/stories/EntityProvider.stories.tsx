import { EntityProvider as EntityProviderComponent } from "../components/reports/EntityProvider.tsx";

export default {
  title: 'EntityProvider',
  component: EntityProviderComponent,
  argTypes: {

  },
  args: {

  },
};

export const EntityProvider = (args: any) => {
  return <EntityProviderComponent {...args} />;
};