import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		// flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
		// gap: 10
	},
	userContainer: {
		alignItems: "center",
		gap: 10
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 100
	},
	title: {
		fontFamily: "Outfit-Bold",
		fontSize: 20,
		color: COLORS.ACCENT
	},
	email: {
		fontFamily: "Outfit-Regular",
		fontSize: 16
	},
	date: {
		fontFamily: "Outfit-Regular",
		fontSize: 16
	}
});

export default styles;
