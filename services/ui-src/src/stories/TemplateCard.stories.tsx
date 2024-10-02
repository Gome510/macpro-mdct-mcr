import { TemplateCard as TemplateCardComponent } from "../components/cards/TemplateCard.tsx";

export default {
  title: 'TemplateCard',
  component: TemplateCardComponent,
  argTypes: {

  },
  args: {
    templateName: 'Sample Text',
    verbiage: undefined,
    isDisabled: true,
  },
};

export const TemplateCard = (args: any) => {
  return <TemplateCardComponent {...args} />;
};