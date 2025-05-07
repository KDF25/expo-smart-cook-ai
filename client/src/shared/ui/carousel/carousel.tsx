import { Marquee, MarqueeProps } from "@animatereactnative/marquee";
import { FC } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import styles from "./carousel.styles";

interface ICarouselProps extends MarqueeProps {
	imageList: ImageSourcePropType[];
}

export const Carousel: FC<ICarouselProps> = ({ imageList, ...props }) => {
	return (
		<Marquee {...props}>
			<View style={styles.container}>
				{imageList.map((image, index) => (
					<Image source={image} key={index} style={styles.image} />
				))}
			</View>
		</Marquee>
	);
};
