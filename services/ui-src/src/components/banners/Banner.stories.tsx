import { Banner } from "./Banner";

const bannerData = {
  title: "Banner Title",
  description: "description",
  link: "link",
};

const meta = {
  component: Banner,
};

export default meta;

export const Default = () => {
  return <Banner bannerData={bannerData} />;
};
