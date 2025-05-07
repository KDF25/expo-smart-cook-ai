import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.SECONDARY,
		height: "100%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderWidth: 3,
		borderColor: COLORS.PRIMARY,
		paddingHorizontal: 20,
		paddingVertical: 40,
		gap: 50
	},
	content: {
		gap: 10
	},
	title: {
		fontFamily: "Outfit-Bold",
		fontSize: 24,
		textAlign: "center"
	},
	subtitle: {
		fontFamily: "Outfit-Regular",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 8,
		color: COLORS.GRAY
	}
});

export default styles;
