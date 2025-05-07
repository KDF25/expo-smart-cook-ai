import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	carouselsContainer: {
		gap: 10
	},
	carousel: {
		transform: [{ rotate: "-4deg" }]
	},
	authContainer: {
		backgroundColor: COLORS.WHITE,
		height: "100%"
	}
});

export default styles;
