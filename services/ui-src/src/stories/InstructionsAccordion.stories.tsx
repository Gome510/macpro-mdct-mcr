import { InstructionsAccordion as InstructionsAccordionComponent } from "../components/accordions/InstructionsAccordion.tsx";

export default {
  title: 'InstructionsAccordion',
  component: InstructionsAccordionComponent,
  argTypes: {

  },
  args: {
    verbiage: undefined,
  },
};

export const InstructionsAccordion = (args: any) => {
  return <InstructionsAccordionComponent {...args} />;
};