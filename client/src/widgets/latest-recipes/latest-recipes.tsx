import { FC } from "react";
import { ScrollView, Text, View } from "react-native";

import styles from "./latest-recipes.styles";
import {
	EmptyRecipesList,
	RecipeCardHome,
	useGetAllRecipes
} from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";

export const LatestRecipes: FC = () => {
	const { data, isLoading } = useGetAllRecipes(5);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Latest recipes</Text>
			{isLoading ? (
				<Loader />
			) : data.length ? (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{data.map((item, index) => (
						<RecipeCardHome
							key={index + item?.recipeName}
							card={item}
						/>
					))}
				</ScrollView>
			) : (
				<EmptyRecipesList />
			)}
		</View>
	);
};
