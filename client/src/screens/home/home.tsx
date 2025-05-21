import { FC } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./home.styles";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { Categories } from "@/src/widgets/categories";
import { CreateRecipe } from "@/src/widgets/create-recipe";
import { HomeHeader } from "@/src/widgets/home-header";
import { LatestRecipes } from "@/src/widgets/latest-recipes";

export const HomeScreen: FC = () => {
	const { user } = useUser();
	return (
		<SafeAreaView style={styles.wrapper}>
			<FlatList
				data={[]}
				renderItem={() => null}
				ListHeaderComponent={
					<ScrollView>
						<View style={styles.container}>
							<HomeHeader user={user!} />
							<CreateRecipe />
							<Categories />
							<LatestRecipes />
						</View>
					</ScrollView>
				}
			/>
		</SafeAreaView>
	);
};
