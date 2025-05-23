import { useLocalSearchParams } from "expo-router";
import { FC } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import styles from "./recipes-by-category.styles";
import {
	EmptyRecipesList,
	RecipeCard,
	useGetRecipesByCategory
} from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";

export const RecipesByCategoryScreen: FC = ({}) => {
	const { category } = useLocalSearchParams();
	const { data, isLoading, isRefreshing, refetch } = useGetRecipesByCategory(
		category as string
	);

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>Choose {category} recipes</Text>
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
