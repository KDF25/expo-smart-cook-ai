import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		// justifyContent: "center",
		alignContent: "center",
		marginTop: 5,
		gap: 5
	},
	label: {
		fontSize: 12,
		width: "100%",
		textAlign: "center"
	},
	focusedLabel: {
		color: COLORS.ACCENT,
		fontFamily: "Outfit-Bold"
	},
	unfocusedLabel: {
		color: COLORS.PRIMARY,
		fontFamily: "Outfit-Regular"
	}
});

export default styles;
