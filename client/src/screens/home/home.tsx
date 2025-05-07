import { FC, useContext } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./home.styles";
import { UserContext } from "@/src/shared/context";
import { CreateRecipe } from "@/src/widgets/create-recipe";
import { HomeHeader } from "@/src/widgets/home-header";

export const HomeScreen: FC = () => {
	const { user } = useContext(UserContext);
	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView>
				<View style={styles.container}>
					<HomeHeader user={user} />
					<CreateRecipe />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
