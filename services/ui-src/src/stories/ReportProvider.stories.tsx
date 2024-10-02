import { ReportProvider as ReportProviderComponent } from "../components/reports/ReportProvider.tsx";

export default {
  title: 'ReportProvider',
  component: ReportProviderComponent,
  argTypes: {

  },
  args: {
    children: undefined,
  },
};

export const ReportProvider = (args: any) => {
  return <ReportProviderComponent {...args} />;
};