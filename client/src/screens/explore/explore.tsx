import { useRouter } from "expo-router";
import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./explore.styles";
import {
	EmptyRecipesList,
	IRecipe,
	RecipeCard,
	useGetAllRecipes
} from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";

export const ExploreScreen: FC = () => {
	const { data, isLoading, isRefreshing, refetch, error } =
		useGetAllRecipes();
	const router = useRouter();

	const handleOnPress = (card: IRecipe) => {
		router.push({
			pathname: "/recipe-info",
			params: { recipeId: card?.id }
		});
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>Explore all recipes</Text>
				{isLoading ? (
					<Loader />
				) : data.length ? (
					<FlatList
						data={data}
						numColumns={2}
						refreshing={isRefreshing}
						onRefresh={refetch}
						renderItem={({ item, index }) => (
							<RecipeCard
								key={index + item?.recipeName}
								card={item}
								onPress={() => handleOnPress(item)}
							/>
						)}
					/>
				) : (
					<EmptyRecipesList />
				)}
			</View>
		</SafeAreaView>
	);
};
