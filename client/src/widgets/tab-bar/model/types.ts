import materialIcons from "react-native-vector-icons/glyphmaps/MaterialIcons.json";

export type MaterialIconName = keyof typeof materialIcons;

export interface ITab {
	name: string;
	title: string;
	icon: MaterialIconName;
}
