import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.WHITE
	},
	container: {
		flex: 1,
		padding: 20,
		gap: 25,
		marginBottom: 50
	},
	content: {
		gap: 15
	},
	loader: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 200
	}
});

export default styles;
