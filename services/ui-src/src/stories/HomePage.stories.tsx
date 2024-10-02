import { HomePage as HomePageComponent } from "../components/pages/Home/HomePage.tsx";

export default {
  title: 'HomePage',
  component: HomePageComponent,
  argTypes: {

  },
  args: {

  },
};

export const HomePage = (args: any) => {
  return <HomePageComponent {...args} />;
};