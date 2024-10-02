import { Form as FormComponent } from "../components/forms/Form.tsx";

export default {
  title: 'Form',
  component: FormComponent,
  argTypes: {

  },
  args: {
    id: 'Sample Text',
    formJson: undefined,
    onSubmit: undefined,
    validateOnRender: true,
    dontReset: true,
    onError: undefined,
    formData: undefined,
    autosave: true,
    children: undefined,
  },
};

export const Form = (args: any) => {
  return <FormComponent {...args} />;
};