import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./recipe-action-sheet.styles";
import { IRecipe, RecipeCard } from "@/src/entities/recipe";

interface ICreateRecipeProps {
	cards: IRecipe[];
	onChooseRecipe: (card: IRecipe) => void;
}

export const RecipeActionSheet: FC<ICreateRecipeProps> = ({
	cards,
	onChooseRecipe
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Choose what to use</Text>
			<View style={styles.cards}>
				{cards?.map((card, index) => (
					<RecipeCard
						key={index}
						card={card}
						onPress={() => {
							onChooseRecipe(card);
						}}
					/>
				))}
			</View>
		</View>
	);
};
