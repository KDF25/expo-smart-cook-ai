import { useRouter } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { FC } from "react";
import {
	Image,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View
} from "react-native";

import { IRecipe } from "../../types";

import styles from "./recipe-card.styles";
import { IMAGES } from "@/src/shared/assets";

interface IRecipeCardProps extends TouchableOpacityProps {
	card: IRecipe;
}

export const RecipeCard: FC<IRecipeCardProps> = ({ card, ...props }) => {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<Image source={IMAGES.photo1} style={styles.image} />
			<View style={styles.titleWrapper}>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={styles.title}
				>
					{card.recipeName}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
