import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		overflow: "hidden",
		height: 150,
		width: 200,
		gap: 5,
		position: "relative",
		borderRadius: 25,
		borderWidth: 3,
		borderColor: COLORS.PRIMARY
	},
	image: {
		width: "100%",
		height: "100%"
	},
	titleWrapper: {
		position: "absolute",
		bottom: 0,
		left: 0,
		backgroundColor: COLORS.SECONDARY,
		opacity: 0.7,
		paddingVertical: 8,
		paddingHorizontal: 12,
		width: "100%"
	},
	title: {
		fontFamily: "Outfit-Bold",
		color: COLORS.BLACK,
		fontSize: 12
	}
});

export default styles;
