import { Stack } from "expo-router";

import Providers from "@/src/apps/providers";

export default function RootLayout() {

	return (
		<Providers>
			<Stack screenOptions={{ headerShown: false }} />
		</Providers>
	);
}
