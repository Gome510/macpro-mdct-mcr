import { SpreadsheetWidget as SpreadsheetWidgetComponent } from "../components/widgets/SpreadsheetWidget.tsx";

export default {
  title: "SpreadsheetWidget",
  component: SpreadsheetWidgetComponent,
  argTypes: {},
  args: {
    writeAdminBanner: undefined,
  },
};

export const SpreadsheetWidget = (args: any) => {
  return <SpreadsheetWidgetComponent {...args} />;
};
