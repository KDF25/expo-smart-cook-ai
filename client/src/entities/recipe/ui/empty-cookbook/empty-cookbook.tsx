import { RelativePathString, useRouter } from "expo-router";
import { FC } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import styles from "./empty-cookbook.styles";
import { IMAGES } from "@/src/shared/assets";
import { Button } from "@/src/shared/ui";
import { ENUM_COOKBOOK_TABS } from "@/src/widgets/cookbook-tab";

interface IEmptyCookbookProps {
	status: ENUM_COOKBOOK_TABS;
}

export const EmptyCookbook: FC<IEmptyCookbookProps> = ({ status }) => {
	const router = useRouter();
	let title: string = "";
	let subtitle: string = "";
	let route = "";
	let image: ImageSourcePropType;
	let buttonText: string = "";

	switch (status) {
		case ENUM_COOKBOOK_TABS.MY_RECIPES:
			title = "🍳 You haven’t added any recipes yet";
			subtitle = "Start building your personal cookbook!";
			image = IMAGES.cook2;
			route = "/home";
			buttonText = "Generate Recipe";
			break;
		case ENUM_COOKBOOK_TABS.FAVORITES:
			title = "No favorites yet";
			subtitle = "Save your favorite recipes here for quick access!";
			image = IMAGES.love;
			route = "/explore";
			buttonText = "Let's Explore";
			break;
	}

	const handleOnPress = () => {
		router.push(route as RelativePathString);
	};

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text style={styles.title}> {title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Button styleButton={styles.button} onPress={handleOnPress}>
				<Text style={styles.text}>{buttonText}</Text>
			</Button>
		</View>
	);
};
