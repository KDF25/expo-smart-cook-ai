import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 50,
		gap: 10
	},
	image: {
		width: 150,
		height: 150
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
	},
	button: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		gap: 10
	},
	text: {
		fontFamily: "Outfit-Bold",
		fontSize: 16,
		color: COLORS.WHITE
	}
});

export default styles;
