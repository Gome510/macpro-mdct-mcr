import { ExportedModalOverlayReportSection as ExportedModalOverlayReportSectionComponent } from "../components/export/ExportedModalOverlayReportSection.tsx";

export default {
  title: 'ExportedModalOverlayReportSection',
  component: ExportedModalOverlayReportSectionComponent,
  argTypes: {

  },
  args: {
    section: undefined,
  },
};

export const ExportedModalOverlayReportSection = (args: any) => {
  return <ExportedModalOverlayReportSectionComponent {...args} />;
};