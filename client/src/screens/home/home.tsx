import { FC } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./home.styles";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { Categories } from "@/src/widgets/categories";
import { CreateRecipe } from "@/src/widgets/create-recipe";
import { HomeHeader } from "@/src/widgets/home-header";

export const HomeScreen: FC = () => {
	const { user } = useUser();
	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView>
				<View style={styles.container}>
					<HomeHeader user={user!} />
					<CreateRecipe />
					<Categories />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
