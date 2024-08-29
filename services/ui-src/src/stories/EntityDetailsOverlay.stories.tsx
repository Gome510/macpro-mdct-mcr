import { EntityDetailsOverlay as EntityDetailsOverlayComponent } from "../components/overlays/EntityDetailsOverlay.tsx";

export default {
  title: "EntityDetailsOverlay",
  component: EntityDetailsOverlayComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EntityDetailsOverlay = (args: any) => {
  return <EntityDetailsOverlayComponent {...args} />;
};
