import { Banner as BannerComponent } from "../components/banners/Banner.tsx";

export default {
  title: "Banner",
  component: BannerComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const Banner = (args: any) => {
  return <BannerComponent {...args} />;
};
