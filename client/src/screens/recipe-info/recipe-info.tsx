import { useLocalSearchParams } from "expo-router";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./recipe-info.styles";
import { useGetRecipeById } from "@/src/entities/recipe";
import { Loader } from "@/src/shared/ui";
import { CreateRecipe } from "@/src/widgets/create-recipe";
import { RecipeHeading } from "@/src/widgets/recipe-heading";
import { RecipeIngredients } from "@/src/widgets/recipe-ingredients";
import { RecipeSteps } from "@/src/widgets/recipe-steps";

export const RecipeInfoScreen: FC = () => {
	const { recipeId } = useLocalSearchParams();
	const { data, isLoading } = useGetRecipeById(recipeId as string);

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>🔥 Ready to Cook?</Text>
				{isLoading ? (
					<Loader />
				) : (
					!!data && (
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={styles.content}>
								<RecipeHeading card={data} />
								<RecipeIngredients card={data} />
								<RecipeSteps card={data} />
								<View style={styles.bottom}>
									<Text style={styles.text}>
										🍽️ Didn't find what you're looking for?
										{"\n"}
										🧑‍🍳 Create your own recipe!
									</Text>
									<CreateRecipe />
								</View>
							</View>
						</ScrollView>
					)
				)}
			</View>
		</SafeAreaView>
	);
};
