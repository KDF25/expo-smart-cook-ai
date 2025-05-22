import { FC } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import { IAchievement } from "../../model";

import styles from "./achievement.styles";

interface IAchievementProps {
	achievement: IAchievement;
}

export const Achievement: FC<IAchievementProps> = ({ achievement }) => {
	return (
		<View style={styles.container}>
			<Image
				source={achievement.image as ImageSourcePropType}
				style={styles.image}
			/>
			<View style={styles.content}>
				<Text style={styles.title}>{achievement.title}</Text>
				<Text style={styles.description}>
					{achievement.description}
				</Text>
			</View>
		</View>
	);
};
