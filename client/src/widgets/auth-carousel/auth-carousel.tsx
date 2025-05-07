import { FC } from "react";
import { View } from "react-native";

import styles from "./auth-carousel.styles";
import { IMAGES } from "@/src/shared/assets";
import { Carousel } from "@/src/shared/ui";

export const AuthCarousel: FC = () => {
	const IMAGE_LIST = [
		IMAGES.cartoon1,
		IMAGES.cartoon2,
		IMAGES.cartoon3,
		IMAGES.cartoon4,
		IMAGES.photo1,
		IMAGES.photo2
	];
	return (
		<View style={styles.container}>
			<Carousel
				imageList={IMAGE_LIST}
				spacing={10}
				speed={0.8}
				style={styles.carousel}
			/>
			<Carousel
				imageList={IMAGE_LIST}
				spacing={10}
				speed={0.3}
				style={styles.carousel}
			/>
			<Carousel
				imageList={IMAGE_LIST}
				spacing={10}
				speed={0.6}
				style={styles.carousel}
			/>
		</View>
	);
};
