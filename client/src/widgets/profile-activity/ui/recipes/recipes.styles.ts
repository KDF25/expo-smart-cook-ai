import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 10
	},

	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},

	text: {
		fontFamily: "Outfit-Bold",
		fontSize: 16,
		color: COLORS.ACCENT
	}
});

export default styles;
