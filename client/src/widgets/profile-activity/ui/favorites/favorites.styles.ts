import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 5
	},
	text: {
		fontFamily: "Outfit-Regular",
		fontSize: 16
	},
	textCategory: {
		fontFamily: "Outfit-Bold",
		fontSize: 16
	}
});

export default styles;
