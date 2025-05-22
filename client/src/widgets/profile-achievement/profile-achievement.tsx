import { FC } from "react";
import { Text, View } from "react-native";

import { ALL_ACHIEVEMENTS } from "./model";
import styles from "./profile-achievement.styles";
import { Achievement } from "./ui";
import { IRecipe } from "@/src/entities/recipe";

interface IProfileAchievementProps {
	myRecipes: IRecipe[];
}

export const ProfileAchievement: FC<IProfileAchievementProps> = ({
	myRecipes
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Achievements:</Text>
			<View style={styles.content}>
				{ALL_ACHIEVEMENTS.map(
					(item, index) =>
						item.condition(myRecipes) && (
							<Achievement key={index} achievement={item} />
						)
				)}
			</View>
		</View>
	);
};
