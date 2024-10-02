import { NotFoundPage as NotFoundPageComponent } from "../components/pages/NotFound/NotFoundPage.tsx";

export default {
  title: 'NotFoundPage',
  component: NotFoundPageComponent,
  argTypes: {

  },
  args: {

  },
};

export const NotFoundPage = (args: any) => {
  return <NotFoundPageComponent {...args} />;
};