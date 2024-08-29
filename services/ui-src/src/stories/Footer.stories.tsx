import { Footer as FooterComponent } from "../components/layout/Footer.tsx";

export default {
  title: "Footer",
  component: FooterComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Footer = (args: any) => {
  return <FooterComponent {...args} />;
};
