import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	wrapper: {
		gap: 5,
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center"
	},
	text: {
		fontFamily: "Outfit-Bold",
		fontSize: 16,
		color: COLORS.PRIMARY
	},
	active: {
		color: COLORS.ACCENT
	}
});

export default styles;
