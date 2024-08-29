import { AccordionItem as AccordionItemComponent } from "../components/accordions/AccordionItem.tsx";

export default {
  title: "AccordionItem",
  component: AccordionItemComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const AccordionItem = (args: any) => {
  return <AccordionItemComponent {...args} />;
};
