import { Banner } from "./Banner";

const bannerData = {
  title: "asdkjflk",
  description: "alksjdf",
  link: "alskdfj",
};

const meta = {
  component: Banner,
};

export default meta;

export const Default = () => {
  return <Banner bannerData={bannerData} />;
};
