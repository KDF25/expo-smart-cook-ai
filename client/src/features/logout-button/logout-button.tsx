import { Ionicons } from "@expo/vector-icons";
import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Text } from "react-native";

import styles from "./logout-button.styles";
import { COLORS } from "@/src/shared/constants";
import { Button } from "@/src/shared/ui";

export const LogoutButton: FC = () => {
	const { signOut } = useLogto();
	const router = useRouter();

	const handleLogin = async () => {
		await signOut();
		router.replace("/");
	};

	return (
		<Button onPress={handleLogin} style={styles.button}>
			<Ionicons name="log-out-outline" size={20} color={COLORS.WHITE} />
			<Text style={styles.text}>Logout</Text>
		</Button>
	);
};
