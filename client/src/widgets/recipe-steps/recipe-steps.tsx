import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./recipe-steps.styles";
import { IRecipe, RecipeStepCard } from "@/src/entities/recipe";

interface IRecipeStepsProps {
	card: IRecipe;
}

export const RecipeSteps: FC<IRecipeStepsProps> = ({ card }) => {
	return (
		<View style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.title}>Step by step</Text>
				<Text style={styles.count}>
					{card?.ingredients?.length} steps
				</Text>
			</View>
			<View style={styles.list}>
				{card?.steps?.map((step, index) => (
					<RecipeStepCard key={index} step={step} index={index} />
				))}
			</View>
		</View>
	);
};
