import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	button: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		gap: 10
	},
	text: {
		fontFamily: "Outfit-Bold",
		fontSize: 16,
		color: COLORS.WHITE
	}
});

export default styles;
