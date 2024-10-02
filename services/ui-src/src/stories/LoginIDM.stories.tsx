import { LoginIDM as LoginIDMComponent } from "../components/logins/LoginIDM.tsx";

export default {
  title: 'LoginIDM',
  component: LoginIDMComponent,
  argTypes: {

  },
  args: {

  },
};

export const LoginIDM = (args: any) => {
  return <LoginIDMComponent {...args} />;
};