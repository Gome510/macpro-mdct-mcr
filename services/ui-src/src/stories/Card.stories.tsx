import { Card as CardComponent } from "../components/cards/Card.tsx";

export default {
  title: 'Card',
  component: CardComponent,
  argTypes: {

  },
  args: {
    children: undefined,
  },
};

export const Card = (args: any) => {
  return <CardComponent {...args} />;
};