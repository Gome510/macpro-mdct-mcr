import { ReportProvider as ReportProviderComponent } from "../components/reports/ReportProvider.tsx";

export default {
  title: "ReportProvider",
  component: ReportProviderComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const ReportProvider = (args: any) => {
  return <ReportProviderComponent {...args} />;
};
