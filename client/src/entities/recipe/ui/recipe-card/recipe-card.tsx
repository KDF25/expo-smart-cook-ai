import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { IRecipe } from "../../types";

import styles from "./recipe-card.styles";

interface IRecipeCardProps extends TouchableOpacityProps {
	card: IRecipe;
}

export const RecipeCard: FC<IRecipeCardProps> = ({ card, ...props }) => {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<Text style={styles.title}>{card?.recipeName}</Text>
			<Text style={styles.description}>{card?.description}</Text>
		</TouchableOpacity>
	);
};
