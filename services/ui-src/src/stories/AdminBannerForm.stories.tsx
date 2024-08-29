import { AdminBannerForm as AdminBannerFormComponent } from "../components/forms/AdminBannerForm.test.tsx";

export default {
  title: "AdminBannerForm",
  component: AdminBannerFormComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AdminBannerForm = (args: any) => {
  return <AdminBannerFormComponent {...args} />;
};
