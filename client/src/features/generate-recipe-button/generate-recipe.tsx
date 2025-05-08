import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./generate-recipe.styles";
import { COLORS } from "@/src/shared/constants";
import { Button } from "@/src/shared/ui";

interface IGenerateRecipeProps extends TouchableOpacityProps {
	isLoading?: boolean;
}

export const GenerateRecipe: FC<IGenerateRecipeProps> = ({
	isLoading,
	...props
}) => {
	return (
		<Button styleButton={styles.button} {...props}>
			{isLoading ? (
				<ActivityIndicator size={20} color={COLORS.WHITE} />
			) : (
				<Icon name="auto-awesome" size={20} color={COLORS.WHITE} />
			)}
			<Text style={styles.text}>Generate Recipe</Text>
		</Button>
	);
};
