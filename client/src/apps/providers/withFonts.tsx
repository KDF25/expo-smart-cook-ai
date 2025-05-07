import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

import { FONTS } from "@/src/shared/assets";

SplashScreen.preventAutoHideAsync();

export const withFonts = (Component: React.FC) => () => {
	const [fontsLoaded] = useFonts({
		"Outfit-Regular": FONTS.outfit_regular,
		"Outfit-Bold": FONTS.outfit_bold
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <View />;
	}

	return <Component />;
};
