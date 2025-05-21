import { FC, useCallback } from "react";
import { View } from "react-native";

import styles from "./cookbook-tabs.styles";
import { COOKBOOK_TABS, ENUM_COOKBOOK_TABS } from "./model";
import { Tab } from "./ui";

interface ICookbookTabProps {
	status: string;
	onChangeStatus: (status: ENUM_COOKBOOK_TABS) => void;
}

export const CookbookTab: FC<ICookbookTabProps> = ({
	status,
	onChangeStatus
}) => {
	const handleTabPress = useCallback(
		(tabTitle: ENUM_COOKBOOK_TABS) => {
			onChangeStatus(tabTitle);
		},
		[status]
	);

	return (
		<View style={styles.wrapper}>
			{COOKBOOK_TABS.map((tab, index) => (
				<Tab
					key={index}
					tab={tab}
					isActive={status === tab.status}
					onPress={() => handleTabPress(tab.status)}
				/>
			))}
		</View>
	);
};
