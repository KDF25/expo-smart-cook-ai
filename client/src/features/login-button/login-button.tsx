import { useLogto } from "@logto/rn";
import { FC } from "react";
import { Text, View } from "react-native";

import { Button } from "@/src/shared/ui";

export const LoginButton: FC = () => {
	const { signIn, signOut, isAuthenticated } = useLogto();

	const handleLogin = () => {
		signIn(process.env.EXPO_PUBLIC_LOGTO_REDIRECT_URL || "");
		// signIn("smartcookai://callback");
	};

	return (
		<Button onPress={handleLogin}>
			<Text> Get Started</Text>
		</Button>
	);
};
