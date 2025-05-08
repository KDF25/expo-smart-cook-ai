import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { ICategory } from "../types";

import styles from "./category-card.styles";

interface ICategoryCardProps {
	card: ICategory;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ card }) => {
	const router = useRouter();
	const handleOnPress = () => {
		router.push({
			pathname: "/recipes-by-category",
			params: { category: card?.name }
		});
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleOnPress}>
			<Image source={{ uri: card?.image?.url }} style={styles.image} />
			<Text style={styles.text}>{card?.name}</Text>
		</TouchableOpacity>
	);
};
