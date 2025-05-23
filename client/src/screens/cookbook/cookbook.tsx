import { FC, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./cookbook.styles";
import {
	EmptyCookbook,
	IRecipe,
	RecipeCard,
	useGetAllUserFavoritesByIds,
	useGetAllUserRecipes
} from "@/src/entities/recipe";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { Loader } from "@/src/shared/ui";
import { CookbookTab, ENUM_COOKBOOK_TABS } from "@/src/widgets/cookbook-tab";

export const CookBookScreen: FC = () => {
	const { user } = useUser();
	const [status, setStatus] = useState<ENUM_COOKBOOK_TABS>(
		ENUM_COOKBOOK_TABS.MY_RECIPES
	);

	const userEmail = user?.email || "test@gmail.com";

	const {
		data: myRecipes,
		isLoading: isLoadingMyRecipes,
		refetch: refetchMyRecipes,
		isRefreshing: isRefreshingMyRecipes
	} = useGetAllUserRecipes({
		email: userEmail,
		skip: status === ENUM_COOKBOOK_TABS.FAVORITES
	});

	const {
		data: favoritesRecipes,
		isLoading: isLoadingFavorites,
		refetch: refetchFavorites,
		isRefreshing: isRefreshingFavorites
	} = useGetAllUserFavoritesByIds({
		email: userEmail,
		skip: status === ENUM_COOKBOOK_TABS.MY_RECIPES
	});

	let data: IRecipe[] = [];
	let refetch: () => void = () => {};
	let isLoading = false;
	let isRefreshing = false;

	switch (status) {
		case ENUM_COOKBOOK_TABS.MY_RECIPES:
			data = myRecipes;
			refetch = refetchMyRecipes;
			isLoading = isLoadingMyRecipes;
			isRefreshing = isRefreshingMyRecipes;
			break;
		case ENUM_COOKBOOK_TABS.FAVORITES:
			data = favoritesRecipes;
			refetch = refetchFavorites;
			isLoading = isLoadingFavorites;
			isRefreshing = isRefreshingFavorites;
			break;
		default:
			break;
	}
	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>My Cookbook 👩‍🍳</Text>
				<CookbookTab status={status} onChangeStatus={setStatus} />
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
					<EmptyCookbook status={status} />
				)}
			</View>
		</SafeAreaView>
	);
};
