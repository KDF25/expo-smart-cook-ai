import { FC, PropsWithChildren } from "react";
import {
	TouchableOpacity,
	TouchableOpacityProps,
	ViewStyle
} from "react-native";

import styles from "./button.styles";

export interface IButtonProps extends TouchableOpacityProps {
	styleButton?: ViewStyle;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	styleButton,
	...rest
}) => {
	return (
		<TouchableOpacity style={[styleButton, styles.button]} {...rest}>
			{children}
		</TouchableOpacity>
	);
};
