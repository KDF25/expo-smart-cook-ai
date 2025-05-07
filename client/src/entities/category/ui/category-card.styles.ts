import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.SECONDARY,
		padding: 5,
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 10,
		gap: 5,
		width: 100,
		height: 100
		// borderColor: COLORS.PRIMARY,
		// borderWidth: 1,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 10
	},
	text: {
		fontFamily: "Outfit-Regular",
		fontSize: 12
	}
});

export default styles;
