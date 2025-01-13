import { Banner as BannerComponent } from "../components/banners/Banner.tsx";

export default {
  title: 'Banner',
  component: BannerComponent,
  argTypes: {

  },
  args: {
    title: 'Sample Text',
    description: 'Sample Text',
    link: 'Sample Text',
  },
};

export const Banner = (args: any) => {
  return <BannerComponent bannerData={args} />;
};