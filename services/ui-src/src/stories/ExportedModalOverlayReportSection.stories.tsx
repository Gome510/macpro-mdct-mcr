import { ExportedModalOverlayReportSection as ExportedModalOverlayReportSectionComponent } from "../components/export/ExportedModalOverlayReportSection.tsx";

export default {
  title: "ExportedModalOverlayReportSection",
  component: ExportedModalOverlayReportSectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedModalOverlayReportSection = (args: any) => {
  return <ExportedModalOverlayReportSectionComponent {...args} />;
};
