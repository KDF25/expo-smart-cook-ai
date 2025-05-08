import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		borderRadius: 25,
		backgroundColor: COLORS.SECONDARY,
		paddingHorizontal: 15,
		alignItems: "center",
		flexGrow: 1,
		height: 70
	},
	left: {
		width: "auto"
	},
	top: {
		flexDirection: "row",
		gap: 5
	},
	quantity: {
		fontSize: 16,
		fontFamily: "Outfit-Bold",
		color: COLORS.ACCENT
	},
	unit: {
		fontSize: 16,
		fontFamily: "Outfit-Bold",
		color: COLORS.ACCENT
	},
	name: {
		fontSize: 14,
		fontFamily: "Outfit-Regular",
		color: COLORS.BLACK
	}
});

export default styles;
