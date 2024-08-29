import { TemplateCard as TemplateCardComponent } from "../components/cards/TemplateCard.tsx";

export default {
  title: "TemplateCard",
  component: TemplateCardComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const TemplateCard = (args: any) => {
  return <TemplateCardComponent {...args} />;
};
