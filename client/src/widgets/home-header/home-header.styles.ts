import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10
	},
	userContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 100
	},
	title: {
		fontFamily: "Outfit-Bold",
		fontSize: 20
	},
	switchContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	text: {
		fontFamily: "Outfit-Regular",
		fontSize: 16
	}
});

export default styles;
