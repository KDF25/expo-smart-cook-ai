import { FC } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./categories.styles";
import { CategoryCard, useAllCategories } from "@/src/entities/category";
import { Loader } from "@/src/shared/ui";

interface ICategoriesProps {
	// add your props here
}

export const Categories: FC<ICategoriesProps> = ({}) => {
	const { data: categories, isLoading } = useAllCategories();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{categories?.map((card) => (
						<CategoryCard key={card?.id} card={card} />
					))}
				</ScrollView>
			)}
		</View>
	);
};
