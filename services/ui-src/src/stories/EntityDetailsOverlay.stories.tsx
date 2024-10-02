import { EntityDetailsOverlay as EntityDetailsOverlayComponent } from "../components/overlays/EntityDetailsOverlay.tsx";

export default {
  title: 'EntityDetailsOverlay',
  component: EntityDetailsOverlayComponent,
  argTypes: {

  },
  args: {
    closeEntityDetailsOverlay: undefined,
    entityType: undefined,
    entities: undefined,
    form: undefined,
    onSubmit: undefined,
    selectedEntity: undefined,
    disabled: true,
    setEntering: undefined,
    submitting: true,
    validateOnRender: true,
  },
};

export const EntityDetailsOverlay = (args: any) => {
  return <EntityDetailsOverlayComponent {...args} />;
};