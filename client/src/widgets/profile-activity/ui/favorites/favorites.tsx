import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

import { getFavoriteCategory } from "../../model";

import styles from "./favorites.styles";
import { IRecipe } from "@/src/entities/recipe";
import { COLORS } from "@/src/shared/constants";

interface IFavoritesProps {
	myRecipes: IRecipe[];
	favoriteRecipes: IRecipe[];
}

export const Favorites: FC<IFavoritesProps> = ({
	myRecipes,
	favoriteRecipes
}) => {
	const category = getFavoriteCategory([...favoriteRecipes, ...myRecipes]);
	return (
		<View style={styles.wrapper}>
			<Ionicons name="star" size={12} color={COLORS.BLACK} />
			<View style={styles.container}>
				<Text style={styles.text}>Favorite Category:</Text>
				<Text
					style={styles.textCategory}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{category}
				</Text>
			</View>
		</View>
	);
};
