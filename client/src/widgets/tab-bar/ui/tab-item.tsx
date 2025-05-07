import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./tab-item.styles";
import { COLORS } from "@/src/shared/constants";

interface ITabItemProps {
	focused: boolean;
	icon: any;
	title: string;
}

export const TabItem = ({ focused, icon, title }: ITabItemProps) => {
	return (
		<View style={styles.container}>
			<Icon
				name={icon}
				size={24}
				color={focused ? COLORS.ACCENT : COLORS.PRIMARY}
			/>
			<Text
				style={[
					styles.label,
					focused ? styles.focusedLabel : styles.unfocusedLabel
				]}
			>
				{title}
			</Text>
		</View>
	);
};
