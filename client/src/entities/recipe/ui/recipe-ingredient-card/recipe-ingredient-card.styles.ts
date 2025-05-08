import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		justifyContent: "space-between",
		alignContent: "center",
		borderWidth: 2,
		borderColor: COLORS.PRIMARY,
		padding: 20,
		borderRadius: 25
	},
	left: {
		flexDirection: "row",
		alignContent: "center",
		gap: 10,
		alignItems: "center"
	},
	index: {
		fontSize: 16,
		fontFamily: "Outfit-Bold"
	},
	info: {
		flexDirection: "row",
		gap: 5,
		alignContent: "center",
		alignItems: "center"
	},
	name: {
		fontSize: 16,
		fontFamily: "Outfit-Regular"
	},
	quantity: {
		fontSize: 12,
		fontFamily: "Outfit-Regular",
		color: COLORS.GRAY
	}
});

export default styles;
