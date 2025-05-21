import { Ionicons } from "@expo/vector-icons";

export interface ICookbookTab {
	title: string;
	icon: keyof typeof Ionicons.glyphMap;
	status: ENUM_COOKBOOK_TABS;
}

export enum ENUM_COOKBOOK_TABS {
	MY_RECIPES = "myRecipes",
	FAVORITES = "favorites"
}
