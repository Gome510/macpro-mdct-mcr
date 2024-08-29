import { AdminBannerProvider as AdminBannerProviderComponent } from "../components/banners/AdminBannerProvider.tsx";

export default {
  title: "AdminBannerProvider",
  component: AdminBannerProviderComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AdminBannerProvider = (args: any) => {
  return <AdminBannerProviderComponent {...args} />;
};
