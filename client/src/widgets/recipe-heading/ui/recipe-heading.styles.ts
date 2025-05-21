import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		gap: 10
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 25,
		borderWidth: 3,
		borderColor: COLORS.PRIMARY
	},
	name: {
		fontSize: 22,
		fontFamily: "Outfit-Bold",
		textAlign: "center",
		paddingHorizontal: 10
	},
	titleContainer: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		alignContent: "center",
		justifyContent: "space-between",
		height: 50
	},
	title: {
		fontSize: 20,
		fontFamily: "Outfit-Bold"
	},
	description: {
		fontSize: 16,
		fontFamily: "Outfit-Regular",
		textAlign: "justify",
		color: COLORS.GRAY
	},
	infoCards: {
		flexDirection: "row",
		gap: 10
	}
});

export default styles;
