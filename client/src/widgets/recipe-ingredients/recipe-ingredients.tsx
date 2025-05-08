import { FC } from "react";
import { FlatList, Text, View } from "react-native";

import styles from "./recipe-ingredients.styles";
import { IRecipe, RecipeIngredientCard } from "@/src/entities/recipe";

interface IRecipeIngredientsProps {
	card: IRecipe;
}

export const RecipeIngredients: FC<IRecipeIngredientsProps> = ({ card }) => {
	return (
		<View style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.title}>Ingredients</Text>
				<Text style={styles.count}>
					{card?.ingredients?.length} items
				</Text>
			</View>
			<View style={styles.list}>
				{card?.ingredients?.map((ingredient, index) => (
					<RecipeIngredientCard
						key={index}
						ingredient={ingredient}
						index={index}
					/>
				))}
			</View>
		</View>
	);
};
