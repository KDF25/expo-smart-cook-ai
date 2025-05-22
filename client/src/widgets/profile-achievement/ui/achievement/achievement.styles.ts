import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		alignContent: "center"
	},
	image: {
		width: 50,
		height: 50,
		padding: 10,
		borderRadius: 150,
		backgroundColor: COLORS.SECONDARY,
		borderWidth: 2,
		borderColor: COLORS.PRIMARY
	},
	content: {
		gap: 5
	},
	title: {
		fontFamily: "Outfit-Bold",
		fontSize: 16,
		color: COLORS.ACCENT
	},
	description: {
		fontFamily: "Outfit-Regular",
		fontSize: 14
	}
});

export default styles;
