import { useRouter } from "expo-router";
import { FC, useRef, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

import styles from "./create-recipe.styles";
import { RecipeActionSheet } from "./ui";
import {
	IRecipe,
	useGenerateRecipe,
	useSaveRecipe
} from "@/src/entities/recipe";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { GenerateRecipe } from "@/src/features/generate-recipe-button";
import { IMAGES } from "@/src/shared/assets";
import { RECIPES_MOCK } from "@/src/shared/constants";

export const CreateRecipe: FC = () => {
	const [text, setText] = useState<string>("");
	const { data, isLoading, generateRecipe } = useGenerateRecipe(text);
	const actionSheetRef = useRef<ActionSheetRef>(null);
	const { user } = useUser();
	const { saveRecipe } = useSaveRecipe();
	const router = useRouter();

	const handlePress = () => {
		generateRecipe();
		if (!isLoading && text) {
			actionSheetRef?.current?.show();
		}
	};

	const handleChooseRecipe = (card: IRecipe) => {
		saveRecipe({ ...card, userEmail: user?.email || "test@gmail.com" })
			.then((response) => {
				actionSheetRef?.current?.hide();
				router.push({
					pathname: "/recipe-info",
					params: { recipeId: response.data.data?.documentId }
				});
			})
			.catch((error) => {
				console.error("Ошибка при сохранении рецепта:", error);
				actionSheetRef?.current?.hide();
			});
	};

	return (
		<View style={styles.container}>
			<Image source={IMAGES.cook} style={styles.image} />
			<Text style={styles.title}>What's on your mind?</Text>
			<Text style={styles.subtitle}>
				Describe it — we’ll cook up the recipe.
			</Text>
			<TextInput
				style={styles.input}
				multiline
				numberOfLines={4}
				placeholder="Tell us the ingredients — we’ll turn them into a recipe."
				onChangeText={(value) => setText(value)}
			/>
			<GenerateRecipe onPress={handlePress} isLoading={isLoading} />
			<ActionSheet ref={actionSheetRef}>
				<RecipeActionSheet
					cards={data || (RECIPES_MOCK.slice(0, 3) as IRecipe[])}
					onChooseRecipe={handleChooseRecipe}
				/>
			</ActionSheet>
		</View>
	);
};
