import { useRouter } from "expo-router";
import { FC } from "react";
import {
	Image,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View
} from "react-native";

import { IRecipe } from "../../types";

import styles from "./recipe-card-home.styles";
import { IMAGES } from "@/src/shared/assets";

interface IRecipeCardHomeProps extends TouchableOpacityProps {
	card: IRecipe;
}

export const RecipeCardHome: FC<IRecipeCardHomeProps> = ({
	card,
	...props
}) => {
	const router = useRouter();
	const handleOnPress = (card: IRecipe) => {
		router.push({
			pathname: "/recipe-info",
			params: { recipeId: card?.documentId }
		});
	};

	return (
		<TouchableOpacity
			style={styles.container}
			{...props}
			onPress={() => handleOnPress(card)}
		>
			<Image source={IMAGES.photo2} style={styles.image} />
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
