import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: COLORS.SECONDARY,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: COLORS.PRIMARY,
		gap: 5
	},
	title: {
		fontSize: 20,
		fontFamily: "Outfit-Bold",
		textAlign: "center"
	},
	description: {
		fontSize: 16,
		fontFamily: "Outfit-Regular",
		textAlign: "left"
	}
});

export default styles;
