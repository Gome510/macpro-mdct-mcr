import { SpreadsheetWidget as SpreadsheetWidgetComponent } from "../components/widgets/SpreadsheetWidget.tsx";

export default {
  title: 'SpreadsheetWidget',
  component: SpreadsheetWidgetComponent,
  argTypes: {

  },
  args: {
    description: 'Sample Text',
    isPdf: true,
    reportType: 'Sample Text',
  },
};

export const SpreadsheetWidget = (args: any) => {
  return <SpreadsheetWidgetComponent {...args} />;
};