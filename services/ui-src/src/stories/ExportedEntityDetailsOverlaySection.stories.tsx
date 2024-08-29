import { ExportedEntityDetailsOverlaySection as ExportedEntityDetailsOverlaySectionComponent } from "../components/export/ExportedEntityDetailsOverlaySection.tsx";

export default {
  title: "ExportedEntityDetailsOverlaySection",
  component: ExportedEntityDetailsOverlaySectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedEntityDetailsOverlaySection = (args: any) => {
  return <ExportedEntityDetailsOverlaySectionComponent {...args} />;
};
