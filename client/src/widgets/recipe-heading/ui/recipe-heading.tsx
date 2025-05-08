import { FC } from "react";
import { Text, View } from "react-native";
import { Image } from "react-native";

import { IRecipe } from "../../../entities/recipe/types";
import { RECIPE_INFO_DATA } from "../model";

import styles from "./recipe-heading.styles";
import { RecipeInfoCard } from "@/src/entities/recipe";
import { IMAGES } from "@/src/shared/assets";

interface IRecipeHeadingProps {
	card: IRecipe;
}

export const RecipeHeading: FC<IRecipeHeadingProps> = ({ card }) => {
	const data = [card?.calories, card?.cookTime, card?.serveTo];
	return (
		<View style={styles.container}>
			<Image source={IMAGES.photo1} style={styles.image} />
			<Text style={styles.name}>{card?.recipeName}</Text>
			<Text style={styles.title}>Description</Text>
			<Text style={styles.description}>{card?.description}</Text>
			<View style={styles.infoCards}>
				{RECIPE_INFO_DATA.map(({ icon, name, unit }, index) => (
					<RecipeInfoCard
						key={name}
						icon={icon}
						name={name}
						unit={unit}
						quantity={data[index]}
					/>
				))}
			</View>
		</View>
	);
};
