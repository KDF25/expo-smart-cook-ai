import { FC, useState } from "react";
import { Image, Switch, View } from "react-native";
import { Text } from "react-native";

import styles from "./home-header.styles";
import { IUser } from "@/src/entities/user";
import { IMAGES } from "@/src/shared/assets";
import { COLORS } from "@/src/shared/constants";

interface IHomeHeaderProps {
	user: IUser;
}

export const HomeHeader: FC<IHomeHeaderProps> = ({ user }) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	return (
		<View style={styles.container}>
			<View style={styles.userContainer}>
				<Image
					source={
						user?.picture ? { uri: user.picture } : IMAGES.avatar
					}
					style={styles.image}
				/>
				<Text style={styles.title}>Hello, {user?.name || "User"}</Text>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.text}>
					{isEnabled ? "Vegan" : "Not Vegan"}
				</Text>
				<Switch
					value={isEnabled}
					onValueChange={() => setIsEnabled(!isEnabled)}
					trackColor={{ true: COLORS.ACCENT }}
					thumbColor={COLORS.WHITE}
				/>
			</View>
		</View>
	);
};
