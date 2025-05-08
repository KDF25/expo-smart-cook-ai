import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

import { COLORS } from "../../constants";

import styles from "./loader.styles";

export const Loader: FC = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={"large"} color={COLORS.ACCENT} />
		</View>
	);
};
