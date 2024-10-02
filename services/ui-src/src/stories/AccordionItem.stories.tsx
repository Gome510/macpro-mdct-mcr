import { Accordion } from "@chakra-ui/react";
import { AccordionItem as AccordionItemComponent } from "../components/accordions/AccordionItem.tsx";
import verbiage from "verbiage/pages/help";

const { accordionItems } = verbiage;

export default {
  title: 'AccordionItem',
  component: AccordionItemComponent,
  argTypes: {
    custom: {
      control: {
        type: "object"
      },
      if: {
        arg: "accordionItems",
        eq: "custom"
      }
    },
    accordionItems: {
      control: {
        type: "select",
        options: ["verbiage", "custom"]
      }
    }
  },
  args: {
    accordionItems: verbiage
  },
};

export const AccordionItem = (args: any) => {

  return (
    <Accordion {...args} accordionItems={args.custom || args.accordionItems}>
      <AccordionItemComponent />
    </Accordion>
  )
};