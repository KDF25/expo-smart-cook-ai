import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./profile-activity.styles";
import { Favorites, LastCreated, Recipes } from "./ui";
import { IRecipe } from "@/src/entities/recipe";

interface IProfileActivityProps {
	myRecipes: IRecipe[];
	favoriteRecipes: IRecipe[];
}

export const ProfileActivity: FC<IProfileActivityProps> = ({
	myRecipes,
	favoriteRecipes
}) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Your Activity:</Text>
			<Recipes myRecipes={myRecipes} favoriteRecipes={favoriteRecipes} />
			<Favorites
				myRecipes={myRecipes}
				favoriteRecipes={favoriteRecipes}
			/>
			<LastCreated myRecipes={myRecipes} />
		</View>
	);
};
