import { AdminDashSelector as AdminDashSelectorComponent } from "../components/forms/AdminDashSelector.tsx";

export default {
  title: 'AdminDashSelector',
  component: AdminDashSelectorComponent,
  argTypes: {

  },
  args: {
    verbiage: undefined,
  },
};

export const AdminDashSelector = (args: any) => {
  return <AdminDashSelectorComponent {...args} />;
};