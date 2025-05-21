import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ICookbookTab } from "../../model";

import styles from "./tab.styles";
import { COLORS } from "@/src/shared/constants";

interface ITabProps extends TouchableOpacityProps {
	tab: ICookbookTab;
	isActive?: boolean;
}

export const Tab: FC<ITabProps> = ({ isActive, tab, ...props }) => {
	return (
		<TouchableOpacity style={styles.wrapper} {...props}>
			<Ionicons
				name={tab.icon}
				size={24}
				color={isActive ? COLORS.ACCENT : COLORS.PRIMARY}
			/>
			<Text style={[styles.text, isActive && styles.active]}>
				{tab.title}
			</Text>
		</TouchableOpacity>
	);
};
