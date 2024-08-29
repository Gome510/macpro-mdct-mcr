import { PreviewBanner as PreviewBannerComponent } from "../components/banners/PreviewBanner.tsx";

export default {
  title: "PreviewBanner",
  component: PreviewBannerComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const PreviewBanner = (args: any) => {
  return <PreviewBannerComponent {...args} />;
};
