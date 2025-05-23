import { StyleSheet } from "react-native";

import { COLORS } from "@/src/shared/constants";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
		marginBottom: 50
	},
	container: {
		flex: 1,
		padding: 20,
		gap: 15
	}
});

export default styles;
