import { FC } from "react";
import { Image, Text, View } from "react-native";

import styles from "./empty-recipes-list.styles";
import { IMAGES } from "@/src/shared/assets";

export const EmptyRecipesList: FC = () => {
	return (
		<View style={styles.container}>
			<Image source={IMAGES.chef} style={styles.image} />
			<Text style={styles.title}> 🍳 This kitchen is too quiet</Text>
			<Text style={styles.subtitle}>
				Be the first to add a recipe and start the cooking party!
			</Text>
		</View>
	);
};
