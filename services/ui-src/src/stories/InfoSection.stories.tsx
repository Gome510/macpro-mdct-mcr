import { InfoSection as InfoSectionComponent } from "../components/layout/InfoSection.tsx";

export default {
  title: "InfoSection",
  component: InfoSectionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const InfoSection = (args: any) => {
  return <InfoSectionComponent {...args} />;
};
