import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
		gap: 10,
		borderWidth: 2,
		borderColor: COLORS.PRIMARY,
		padding: 20,
		borderRadius: 25
	},
	index: {
		fontSize: 16,
		fontFamily: "Outfit-Bold"
	},
	step: {
		fontSize: 16,
		fontFamily: "Outfit-Regular",
		paddingRight: 10
	}
});

export default styles;
