import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./recipe-step-card.styles";

interface IRecipeStepCardProps {
	step: string;
	index: number;
}

export const RecipeStepCard: FC<IRecipeStepCardProps> = ({ step, index }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.index}>{index + 1}.</Text>
			<Text style={styles.step}>{step}</Text>
		</View>
	);
};
