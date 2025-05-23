import { FC, useState } from "react";
import { Text, View } from "react-native";

import { IRecipe } from "@/src/entities/recipe";
import { ENUM_CHART_TABS } from "./model";
import styles from "./profile-chart.styles";
import { Chart, ChartTabs } from "./ui";

interface IProfileChartProps {
	myRecipes: IRecipe[];
}

export const ProfileChart: FC<IProfileChartProps> = ({ myRecipes }) => {
	const [status, setStatus] = useState<ENUM_CHART_TABS>(ENUM_CHART_TABS.WEEK);

	const handleOnChangeStatus = (status: ENUM_CHART_TABS) => {
		setStatus(status);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recipes Created Per Day:</Text>
			<ChartTabs status={status} onChangeStatus={handleOnChangeStatus} />
			<Chart recipes={myRecipes} status={status} />
		</View>
	);
};
