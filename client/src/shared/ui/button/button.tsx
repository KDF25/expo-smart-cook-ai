import { FC, PropsWithChildren } from "react";
import {
	Text,
	TextStyle,
	TouchableOpacity,
	TouchableOpacityProps,
	ViewStyle
} from "react-native";

import styles from "./button.styles";

export interface IButtonProps extends TouchableOpacityProps {
	styleButton?: ViewStyle;
	styleText?: TextStyle;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	styleButton,
	styleText,
	...rest
}) => {
	return (
		<TouchableOpacity style={[styleButton, styles.button]} {...rest}>
			<Text style={[styleText, styles.text]}>{children}</Text>
		</TouchableOpacity>
	);
};
