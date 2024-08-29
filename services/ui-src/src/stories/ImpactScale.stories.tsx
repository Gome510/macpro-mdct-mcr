import { ImpactScale as ImpactScaleComponent } from "../components/ImpactScale.tsx";

export default {
  title: "ImpactScale",
  component: ImpactScaleComponent,
  argTypes: {},
  args: {
    error: "Sample Text",
    variant: "Sample Text",
    sxOverride: undefined,
  },
};

export const ImpactScale = (args: any) => {
  return <ImpactScaleComponent {...args} />;
};
