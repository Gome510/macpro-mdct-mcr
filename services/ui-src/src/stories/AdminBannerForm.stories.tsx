import { AdminBannerForm as AdminBannerFormComponent } from "../components/forms/AdminBannerForm.tsx";

export default {
  title: 'AdminBannerForm',
  component: AdminBannerFormComponent,
  argTypes: {

  },
  args: {
    writeAdminBanner: undefined,
  },
};

export const AdminBannerForm = (args: any) => {
  return <AdminBannerFormComponent {...args} />;
};