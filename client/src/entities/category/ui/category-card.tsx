import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { ICategory } from "../types";

import styles from "./category-card.styles";

interface ICategoryCardProps {
	card: ICategory;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ card }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={{ uri: card?.image?.url }} style={styles.image} />
			<Text style={styles.text}>{card?.name}</Text>
		</TouchableOpacity>
	);
};
