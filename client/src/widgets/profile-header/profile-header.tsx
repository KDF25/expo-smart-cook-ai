import { FC } from "react";
import { Image, Text, View } from "react-native";

import styles from "./profile-header.styles";
import { IUser } from "@/src/entities/user";
import { IMAGES } from "@/src/shared/assets";

interface IProfileHeaderProps {
	user: IUser;
}

export const ProfileHeader: FC<IProfileHeaderProps> = ({ user }) => {
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
			<Text style={styles.email}>{user?.email || "email@gmail.com"}</Text>
			<Text style={styles.date}>Joined on:</Text>
		</View>
	);
};
