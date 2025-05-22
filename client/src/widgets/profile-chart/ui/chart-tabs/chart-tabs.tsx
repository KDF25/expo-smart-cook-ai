import { FC, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CHART_TABS, ENUM_CHART_TABS } from "../../model";

import styles from "./chart-tabs.styles";

interface IChartTabsProps {
	status: ENUM_CHART_TABS;
	onChangeStatus: (status: ENUM_CHART_TABS) => void;
}

export const ChartTabs: FC<IChartTabsProps> = ({ status, onChangeStatus }) => {
	const handleTabPress = useCallback(
		(status: ENUM_CHART_TABS) => {
			onChangeStatus(status);
		},
		[status]
	);

	return (
		<View style={styles.container}>
			{CHART_TABS.map((tab) => (
				<TouchableOpacity
					key={tab.status}
					style={[
						styles.tab,
						status === tab.status && styles.tabActive
					]}
					onPress={() => handleTabPress(tab.status)}
				>
					<Text style={styles.text}>{tab.title}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};
