import { FC } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const withGestureHandler =
	(Component: FC): FC =>
	() => (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Component />
		</GestureHandlerRootView>
	);
