import { AdminDashSelector as AdminDashSelectorComponent } from "../components/forms/AdminDashSelector.tsx";

export default {
  title: 'AdminDashSelector',
  component: AdminDashSelectorComponent,
  argTypes: {

  },
  args: {
    header: "Sample Text",
    buttonLabel: "Sample Text"
  },
};

export const AdminDashSelector = (args: any) => {
  const verbiage = {header: args.header, buttonLabel: args.buttonLabel}
  return <AdminDashSelectorComponent verbiage={verbiage} />;
};