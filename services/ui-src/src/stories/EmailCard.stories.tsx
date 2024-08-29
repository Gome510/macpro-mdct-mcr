import { EmailCard as EmailCardComponent } from "../components/cards/EmailCard.tsx";

export default {
  title: "EmailCard",
  component: EmailCardComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const EmailCard = (args: any) => {
  return <EmailCardComponent {...args} />;
};
