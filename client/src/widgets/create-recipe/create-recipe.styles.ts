import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: COLORS.SECONDARY,
		borderColor: COLORS.PRIMARY,
		borderRadius: 20,
		borderWidth: 2,
		alignItems: "center"
	},
	image: {
		width: 80,
		height: 80
	},
	title: {
		fontSize: 24,
		fontFamily: "Outfit-Bold",
		textAlign: "center"
	},
	subtitle: {
		fontSize: 16,
		fontFamily: "Outfit-Regular",
		textAlign: "center",
		marginBottom: 20
	},
	input: {
		fontSize: 12,
		fontFamily: "Outfit-Regular",
		backgroundColor: COLORS.WHITE,
		padding: 10,
		borderRadius: 10,
		width: "100%",
		height: 100,
		textAlignVertical: "top",
		marginBottom: 20
	}
});

export default styles;
