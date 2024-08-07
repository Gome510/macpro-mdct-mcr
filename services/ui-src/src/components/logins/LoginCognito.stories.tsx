import { Container } from "@chakra-ui/react";
import { LoginCognito as LoginCognitoComponent } from "./LoginCognito";

const loginContainer = {
  maxWidth: "25rem",
  height: "full",
  marginY: "auto",
};

const meta = {
  title: "Login Cognito",
  component: LoginCognitoComponent,
  decorators: [
    (Story: any) => {
      return (
        <main>
          <Container sx={loginContainer}>
            <Story />
          </Container>
        </main>
      );
    },
  ],
};

export default meta;

export const LoginCognito = () => {
  return <LoginCognitoComponent />;
};
