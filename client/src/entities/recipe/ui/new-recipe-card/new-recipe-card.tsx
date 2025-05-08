import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { IRecipe } from "../../types";

import styles from "./new-recipe-card.styles";

interface INewRecipeCardProps extends TouchableOpacityProps {
	card: IRecipe;
}

export const NewRecipeCard: FC<INewRecipeCardProps> = ({ card, ...props }) => {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<Text style={styles.title}>{card?.recipeName}</Text>
			<Text style={styles.description}>{card?.description}</Text>
		</TouchableOpacity>
	);
};
