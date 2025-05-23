import { FC } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import styles from "./profile.styles";
import {
	useGetAllUserFavoritesByIds,
	useGetAllUserRecipes
} from "@/src/entities/recipe";
import { useUser } from "@/src/entities/user/hooks/useUser";
import { LogoutButton } from "@/src/features/logout-button";
import { Loader } from "@/src/shared/ui";
import { ProfileAchievement } from "@/src/widgets/profile-achievement";
import { ProfileActivity } from "@/src/widgets/profile-activity";
import { ProfileChart } from "@/src/widgets/profile-chart";
import { ProfileHeader } from "@/src/widgets/profile-header";

export const ProfileScreen: FC = () => {
	const { user } = useUser();
	const userEmail = user?.email || "test@gmail.com";
	const { data: myRecipes, isLoading: isLoadingMyRecipes } =
		useGetAllUserRecipes({
			email: userEmail
		});

	const { data: favoritesRecipes, isLoading: isLoadingFavorites } =
		useGetAllUserFavoritesByIds({
			email: userEmail
		});

	const isLoading = isLoadingMyRecipes || isLoadingFavorites;

	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView>
				<View style={styles.container}>
					<ProfileHeader user={user!} />

					{isLoading ? (
						<View style={styles.loader}>
							<Loader />
						</View>
					) : (
						<View style={styles.content}>
							<ProfileActivity
								myRecipes={myRecipes || []}
								favoriteRecipes={favoritesRecipes || []}
							/>
							<ProfileChart myRecipes={myRecipes || []} />
							<ProfileAchievement myRecipes={myRecipes || []} />
						</View>
					)}
					<LogoutButton />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
