import { FormProvider } from "react-hook-form";
import { CheckboxField as CheckboxFieldComponent } from "../components/fields/CheckboxField.tsx";
import { Form } from "components";
import type { Decorator } from "@storybook/react";

function generateChoices(amount: number){
  return Array.from({ length: amount }, (_, index) => ({
    id: `ID ${index}`,
    name: `Name ${index}`,
    label: `Option ${index}`,
    value: `Value ${index}`,
  }))
};

export default {
  title: 'CheckboxField',
  component: CheckboxFieldComponent,
  argTypes: {
    numberOfChoices:{
      type: 'number',
    }
  },
  args: {
    name: "Sample Text",
    label: "Sample Text",
    numberOfChoices: 3,
    choices: generateChoices(3)
  },
  decorators: [
    ((Story) => (
      <Form
        id="id"
        formJson={{id: "id1", fields: []}}
        onSubmit={() => {}}
        validateOnRender={false}
        dontReset={false}
      >
        <Story />
      </Form>
    )) as Decorator
  ]
};

export const CheckboxField = (args: any) => {
  return <CheckboxFieldComponent {...args} choices={generateChoices(args.numberOfChoices)} />;
};