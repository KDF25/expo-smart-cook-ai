import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		gap: 10
	},
	title: {
		fontFamily: "Outfit-Bold",
		fontSize: 20,
		color: COLORS.ACCENT
	},
	content: {
		gap: 10
	}
});

export default styles;
