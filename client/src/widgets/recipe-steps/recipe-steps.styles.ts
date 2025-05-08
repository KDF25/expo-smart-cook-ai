import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		gap: 10
	},
	heading: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		alignContent: "center"
	},
	title: {
		fontSize: 20,
		fontFamily: "Outfit-Bold"
	},
	count: {
		fontSize: 16,
		fontFamily: "Outfit-Regular"
	},
	list: {
		gap: 10
	}
});

export default styles;
