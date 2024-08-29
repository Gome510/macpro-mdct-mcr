import { NotFoundPage as NotFoundPageComponent } from "../components/pages/NotFound/NotFoundPage.tsx";

export default {
  title: "NotFoundPage",
  component: NotFoundPageComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const NotFoundPage = (args: any) => {
  return <NotFoundPageComponent {...args} />;
};
