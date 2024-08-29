import { ExportedSectionHeading as ExportedSectionHeadingComponent } from "../components/export/ExportedSectionHeading.tsx";

export default {
  title: "ExportedSectionHeading",
  component: ExportedSectionHeadingComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ExportedSectionHeading = (args: any) => {
  return <ExportedSectionHeadingComponent {...args} />;
};
