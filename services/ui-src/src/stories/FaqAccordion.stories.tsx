import { FaqAccordion as FaqAccordionComponent } from "../components/accordions/FaqAccordion.tsx";

export default {
  title: "FaqAccordion",
  component: FaqAccordionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const FaqAccordion = (args: any) => {
  return <FaqAccordionComponent {...args} />;
};
