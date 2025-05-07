import { FC } from "react";
import { ActivityIndicator } from "react-native";

import { COLORS } from "../../constants";

export const Loader: FC = () => {
	return <ActivityIndicator size={"large"} color={COLORS.ACCENT} />;
};
