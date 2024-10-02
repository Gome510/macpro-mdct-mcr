import { ProfilePage as ProfilePageComponent } from "../components/pages/Profile/ProfilePage.tsx";

export default {
  title: 'ProfilePage',
  component: ProfilePageComponent,
  argTypes: {

  },
  args: {

  },
};

export const ProfilePage = (args: any) => {
  return <ProfilePageComponent {...args} />;
};