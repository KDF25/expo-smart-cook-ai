import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.ACCENT,
		padding: 15,
		borderRadius: 15,
		alignItems: "center"
	},
	text: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontFamily: "Outfit-Bold"
	}
});

export default styles;
