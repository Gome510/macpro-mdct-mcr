import { Banner as BannerComponent } from "../components/banners/Banner";

const bannerData = {
  title: "Banner Title",
  description: "description",
  link: "link",
};

const meta = {
  title: "Banner",
  component: BannerComponent,
};

export default meta;

export const Banner = () => {
  return <BannerComponent bannerData={bannerData} />;
};
