import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		gap: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	tab: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: COLORS.SECONDARY,
		borderWidth: 1,
		borderColor: COLORS.PRIMARY,
		flexBasis: 100,
		flexGrow: 1
	},
	tabActive: {
		borderColor: COLORS.ACCENT
	},

	text: {
		fontFamily: "Outfit-Regular",
		fontSize: 12,
		textAlign: "center"
	}
});

export default styles;
