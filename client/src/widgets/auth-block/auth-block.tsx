import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./auth-block.styles";
import { LoginButton } from "@/src/features/login-button";

export const AuthBlock: FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>
					Cook Smarter, Not Harder with Smart-Cook-AI! 👩‍🍳🍕
				</Text>
				<Text style={styles.subtitle}>
					Generate unique recipes based on your preferences and
					ingredients. 🤖
				</Text>
			</View>
			<LoginButton />
		</View>
	);
};
