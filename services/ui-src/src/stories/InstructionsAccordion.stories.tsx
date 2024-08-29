import { InstructionsAccordion as InstructionsAccordionComponent } from "../components/accordions/InstructionsAccordion.tsx";

export default {
  title: "InstructionsAccordion",
  component: InstructionsAccordionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const InstructionsAccordion = (args: any) => {
  return <InstructionsAccordionComponent {...args} />;
};
