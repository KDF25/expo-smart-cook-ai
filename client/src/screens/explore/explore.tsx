import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./explore.styles";
import {
	EmptyRecipesList,
	RecipeCard,
	useGetAllRecipes
} from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";

export const ExploreScreen: FC = () => {
	const { data, isLoading, isRefreshing, refetch } = useGetAllRecipes();

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
						renderItem={({ item }) => (
							<RecipeCard key={item?.documentId} card={item} />
						)}
					/>
				) : (
					<EmptyRecipesList />
				)}
			</View>
		</SafeAreaView>
	);
};
