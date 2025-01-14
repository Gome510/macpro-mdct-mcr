import { DashboardTable as DashboardTableComponent } from "../components/pages/Dashboard/DashboardTable.tsx";

const body = { table: { 
  caption: "Sample Text",
  headRow: ["Sample Text"],
  bodyRows: [["Row 0"]]
}}

export default {
  title: 'DashboardTable',
  component: DashboardTableComponent,
  argTypes: {
    reportType: {
      type: "select",
      options: ["MCPAR", "MLR"],
    }
  },
  args: {
    reportsByState: [],
    body,
    reportType: "MCPAR",
    reportId: "Sample Text",
    openAddEditReportModal: () => {},
    enterSelectedReport: () => {},
    archiveReport: () => {},
    archiving: false,
    entering: false,
    isAdmin: false,
    isStateLevelUser: false,
    releaseReport: undefined,
    releasing: undefined,
    sxOverride: {},
  },
};

export const DashboardTable = (args: any) => {
  return <DashboardTableComponent {...args}   />;
};