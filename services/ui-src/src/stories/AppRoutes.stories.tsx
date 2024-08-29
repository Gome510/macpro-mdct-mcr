import { AppRoutes as AppRoutesComponent } from "../components/app/AppRoutes.tsx";

export default {
  title: "AppRoutes",
  component: AppRoutesComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AppRoutes = (args: any) => {
  return <AppRoutesComponent {...args} />;
};
