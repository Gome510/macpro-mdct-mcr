import { PageTemplate as PageTemplateComponent } from "../components/layout/PageTemplate.tsx";

export default {
  title: 'PageTemplate',
  component: PageTemplateComponent,
  argTypes: {

  },
  args: {

  },
};

export const PageTemplate = (args: any) => {
  return <PageTemplateComponent {...args} />;
};