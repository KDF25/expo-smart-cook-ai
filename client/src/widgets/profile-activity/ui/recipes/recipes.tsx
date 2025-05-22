import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./recipes.styles";
import { IRecipe } from "@/src/entities/recipe";
import { COLORS } from "@/src/shared/constants";

interface IRecipesProps {
	myRecipes: IRecipe[];
	favoriteRecipes: IRecipe[];
}

export const Recipes: FC<IRecipesProps> = ({ myRecipes, favoriteRecipes }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Ionicons name="bulb-outline" size={24} color={COLORS.ACCENT} />
				<Text style={styles.text}>My recipes: {myRecipes.length}</Text>
			</View>
			<View style={styles.container}>
				<Ionicons name="bookmark" size={24} color={COLORS.ACCENT} />
				<Text style={styles.text}>
					Favorites recipes: {favoriteRecipes.length}
				</Text>
			</View>
		</View>
	);
};
