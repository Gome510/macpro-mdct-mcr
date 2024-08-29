import { AdminPage as AdminPageComponent } from "../components/pages/Admin/AdminPage.tsx";

export default {
  title: "AdminPage",
  component: AdminPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AdminPage = (args: any) => {
  return <AdminPageComponent {...args} />;
};
