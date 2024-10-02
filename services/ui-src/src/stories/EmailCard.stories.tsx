import { EmailCard as EmailCardComponent } from "../components/cards/EmailCard.tsx";

export default {
  title: 'EmailCard',
  component: EmailCardComponent,
  argTypes: {

  },
  args: {
    verbiage: undefined,
    icon: 'Sample Text',
  },
};

export const EmailCard = (args: any) => {
  return <EmailCardComponent {...args} />;
};