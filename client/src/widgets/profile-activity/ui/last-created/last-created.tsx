import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

import { getTimeAgoString } from "../../model";

import styles from "./last-created.styles";
import { IRecipe } from "@/src/entities/recipe";
import { COLORS } from "@/src/shared/constants";

interface ILastCreatedProps {
	myRecipes: IRecipe[];
}

export const LastCreated: FC<ILastCreatedProps> = ({ myRecipes }) => {
	const lastRecipe = myRecipes.reduce((latest, recipe) => {
		return new Date(recipe.createdAt) > new Date(latest.createdAt)
			? recipe
			: latest;
	}, myRecipes[0]);
	const diff = getTimeAgoString(lastRecipe?.createdAt);
	return (
		<>
			<View style={styles.wrapper}>
				<Ionicons name="star" size={12} color={COLORS.BLACK} />
				<View style={styles.container}>
					<Text style={styles.text}>Last Created recipe:</Text>
					<Text
						style={styles.textCategory}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{lastRecipe?.recipeName}
					</Text>
				</View>
			</View>
			<Text style={styles.textCategory}> {diff}</Text>
		</>
	);
};
