import { TemplateCardAccordion as TemplateCardAccordionComponent } from "../components/accordions/TemplateCardAccordion.tsx";

export default {
  title: "TemplateCardAccordion",
  component: TemplateCardAccordionComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const TemplateCardAccordion = (args: any) => {
  return <TemplateCardAccordionComponent {...args} />;
};
