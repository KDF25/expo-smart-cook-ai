import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./cookbook.styles";

import {
    EmptyRecipesList,
    RecipeCard,
    useGetAllRecipes
} from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";

export const CookBookScreen: FC = () => {
	const { data, isLoading, isRefreshing, refetch } = useGetAllRecipes();

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>My Cookbook 👩‍🍳</Text>
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
