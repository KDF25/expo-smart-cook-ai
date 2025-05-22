import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";

import { ENUM_CHART_TABS, getCountRecipes } from "../../model";

import { IRecipe } from "@/src/entities/recipe";
import { COLORS } from "@/src/shared/constants";

interface ChartProps {
	recipes: IRecipe[];
	status: ENUM_CHART_TABS;
}

export const Chart = ({ recipes, status }: ChartProps) => {
	const { labels, values } = getCountRecipes(recipes, status);

	const barWidth = 40;
	const chartWidth = Math.max(
		Dimensions.get("window").width,
		labels.length * barWidth
	);
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<BarChart
				data={{
					labels,
					datasets: [{ data: values }]
				}}
				width={chartWidth}
				height={220}
				// fromZero
				// withInnerLines={false}
				yAxisLabel=""
				yAxisSuffix=" rcp"
				yAxisInterval={1}
				segments={2}
				showValuesOnTopOfBars={false}
				chartConfig={{
					backgroundGradientFrom: "#fff",
					backgroundGradientTo: "#fff",
					fillShadowGradientFrom: COLORS.ACCENT, // Цвет колонок
					fillShadowGradientTo: COLORS.ACCENT, // Цвет колонок
					fillShadowGradientOpacity: 1,
					decimalPlaces: 1, // <- важно
					color: () => COLORS.WHITE, // Цвет самих баров
					labelColor: () => COLORS.ACCENT,
					barPercentage: 1, // Контроль ширины баров
					propsForBackgroundLines: {
						// strokeDasharray: ""
					},
					propsForLabels: {
						fontFamily: "Outfit-Bold",
						fontSize: 12
					},
					barRadius: 10
				}}
			/>
		</ScrollView>
	);
};
