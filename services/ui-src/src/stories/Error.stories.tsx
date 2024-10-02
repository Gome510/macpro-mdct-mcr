import { Error as ErrorComponent } from "../components/app/Error.tsx";

export default {
  title: 'Error',
  component: ErrorComponent,
  argTypes: {

  },
  args: {

  },
};

export const Error = (args: any) => {
  return <ErrorComponent {...args} />;
};