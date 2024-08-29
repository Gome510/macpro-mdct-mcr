import { LoginCognito as LoginCognitoComponent } from "../components/logins/LoginCognito.tsx";

export default {
  title: "LoginCognito",
  component: LoginCognitoComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const LoginCognito = (args: any) => {
  return <LoginCognitoComponent {...args} />;
};
