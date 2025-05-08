import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 50
	},
	image: {
		width: 150,
		height: 150,
		marginBottom: 20
	},
	title: {
		fontSize: 24,
		fontFamily: "Outfit-Bold",
		textAlign: "center",
		color: COLORS.ACCENT
	},
	subtitle: {
		fontSize: 16,
		fontFamily: "Outfit-Regular",
		textAlign: "center",
		color: COLORS.PRIMARY
	}
});

export default styles;
