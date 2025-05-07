import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthBlock } from "@/src/widgets/auth-block";
import { AuthCarousel } from "@/src/widgets/auth-carousel";

export const AuthScreen: FC = () => {
	return (
		<SafeAreaView>
			<AuthCarousel />
			<AuthBlock />
		</SafeAreaView>
	);
};
