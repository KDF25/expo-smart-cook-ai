import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./cookbook.styles";
import {
	EmptyRecipesList,
	RecipeCard,
	useGetAllUserRecipes
} from "@/src/entities/recipe";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { Loader } from "@/src/shared/ui";

export const CookBookScreen: FC = () => {
	const { user } = useUser();
	const userEmail = user?.email || "damirk355@gmail.com";

	const { data, isLoading, isRefreshing, refetch } =
		useGetAllUserRecipes(userEmail);

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
