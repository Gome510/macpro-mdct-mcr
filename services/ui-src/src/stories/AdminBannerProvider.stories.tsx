import { AdminBannerProvider as AdminBannerProviderComponent } from "../components/banners/AdminBannerProvider.tsx";

export default {
  title: 'AdminBannerProvider',
  component: AdminBannerProviderComponent,
  argTypes: {

  },
  args: {
    children: undefined,
  },
};

export const AdminBannerProvider = (args: any) => {
  return <AdminBannerProviderComponent {...args} />;
};