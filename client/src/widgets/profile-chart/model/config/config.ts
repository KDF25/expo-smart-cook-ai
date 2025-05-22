import { ENUM_CHART_TABS, IChartTab } from "./types";

export const CHART_TABS: IChartTab[] = [
	{
		title: "Week",
		status: ENUM_CHART_TABS.WEEK
	},
	{
		title: "Month",
		status: ENUM_CHART_TABS.MONTH
	},
	{
		title: "Year",
		status: ENUM_CHART_TABS.YEAR
	}
];
