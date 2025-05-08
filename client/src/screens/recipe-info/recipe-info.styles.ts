import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.WHITE
	},
	container: {
		flex: 1,
		padding: 20,
		gap: 15
	},
	title: {
		fontSize: 24,
		fontFamily: "Outfit-Bold",
		textAlign: "center",
		color: COLORS.ACCENT
	},
	content: {
		gap: 25
	},
	bottom: {
		gap: 10
	},
	text: {
		fontSize: 14,
		fontFamily: "Outfit-Regular",
		textAlign: "center",
		color: COLORS.GRAY,
		paddingHorizontal: 20
	}
});

export default styles;
