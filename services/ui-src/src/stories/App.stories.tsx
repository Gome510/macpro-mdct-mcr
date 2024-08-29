import { App as AppComponent } from "../components/app/App.tsx";

export default {
  title: "App",
  component: AppComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const App = (args: any) => {
  return <AppComponent {...args} />;
};
