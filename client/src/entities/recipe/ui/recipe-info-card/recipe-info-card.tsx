import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";
import { Text } from "react-native";
import { View } from "react-native";

import { IInfoData } from "../../types";

import styles from "./recipe-info-card.styles";
import { COLORS } from "@/src/shared/constants";

interface IRecipeInfoCardProps extends IInfoData {}

export const RecipeInfoCard: FC<IRecipeInfoCardProps> = ({
	icon,
	name,
	unit,
	quantity
}) => {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name={icon}
				size={24}
				color={COLORS.ACCENT}
			/>
			<View style={styles.left}>
				<View style={styles.top}>
					<Text style={styles.quantity}>{quantity}</Text>
					<Text style={styles.unit}>{unit}</Text>
				</View>
				<Text style={styles.name}>{name}</Text>
			</View>
		</View>
	);
};
