import { FC } from "react";
import { Text, View } from "react-native";

import { IIngredient } from "../../types";

import styles from "./recipe-ingredient-card.styles";

interface IRecipeIngredientCardProps {
	ingredient: IIngredient;
	index: number;
}

export const RecipeIngredientCard: FC<IRecipeIngredientCardProps> = ({
	ingredient,
	index
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Text style={styles.index}>{index + 1}.</Text>
				<View style={styles.info}>
					<Text>{ingredient?.icon}</Text>
					<Text style={styles.name}>
						{ingredient?.name?.toUpperCase()}
					</Text>
				</View>
			</View>
			<Text style={styles.quantity}>{ingredient?.quantity}</Text>
		</View>
	);
};
