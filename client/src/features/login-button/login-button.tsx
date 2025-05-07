import { useLogto } from "@logto/rn";
import { FC } from "react";
import { Text } from "react-native";

import styles from "./login-button.styles";
import { Button } from "@/src/shared/ui";

export const LoginButton: FC = () => {
	const { signIn, signOut, isAuthenticated } = useLogto();

	const handleLogin = () => {
		signIn(process.env.EXPO_PUBLIC_LOGTO_REDIRECT_URL || "");
		// signIn("smartcookai://callback");
	};

	return (
		<Button onPress={handleLogin}>
			<Text style={styles.text}>Get Started</Text>
		</Button>
	);
};
