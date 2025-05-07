import { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const withSafeArea =
	(Component: FC): FC =>
	() => (
		<SafeAreaProvider>
			<Component />
		</SafeAreaProvider>
	);
