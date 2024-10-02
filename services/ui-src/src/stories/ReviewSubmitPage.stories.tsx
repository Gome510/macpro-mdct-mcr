import { ReviewSubmitPage as ReviewSubmitPageComponent } from "../components/pages/ReviewSubmit/ReviewSubmitPage.tsx";

export default {
  title: 'ReviewSubmitPage',
  component: ReviewSubmitPageComponent,
  argTypes: {

  },
  args: {

  },
};

export const ReviewSubmitPage = (args: any) => {
  return <ReviewSubmitPageComponent {...args} />;
};