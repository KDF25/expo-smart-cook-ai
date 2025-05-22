export interface IChartTab {
	title: string;
	status: ENUM_CHART_TABS;
}
export enum ENUM_CHART_TABS {
	WEEK = "week",
	MONTH = "month",
	YEAR = "year"
}
