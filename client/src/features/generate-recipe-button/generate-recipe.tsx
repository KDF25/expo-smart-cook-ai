import { FC } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./generate-recipe.styles";
import { Button } from "@/src/shared/ui";

interface IGenerateRecipeProps {
	// add your props here
}

export const GenerateRecipe: FC<IGenerateRecipeProps> = ({}) => {
	return (
		<Button styleButton={styles.button}>
			<Icon name="auto-awesome" size={20} color="white" />
			<Text style={styles.text}>Generate Recipe</Text>
		</Button>
	);
};
