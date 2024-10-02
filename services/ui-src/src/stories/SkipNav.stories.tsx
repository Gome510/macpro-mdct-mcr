import { SkipNav as SkipNavComponent } from "../components/app/SkipNav.tsx";

export default {
  title: 'SkipNav',
  component: SkipNavComponent,
  argTypes: {

  },
  args: {
    id: 'Sample Text',
    href: 'Sample Text',
    text: 'Sample Text',
    sxOverride: undefined,
  },
};

export const SkipNav = (args: any) => {
  return <SkipNavComponent {...args} />;
};