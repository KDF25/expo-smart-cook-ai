import { FC, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Image } from "react-native";

import styles from "./create-recipe.styles";
import { GenerateRecipe } from "@/src/features/generate-recipe-button";
import { IMAGES } from "@/src/shared/assets";

export const CreateRecipe: FC = () => {
	const [text, setText] = useState<string>("");
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
			<GenerateRecipe />
		</View>
	);
};
