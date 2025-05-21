import { ENUM_COOKBOOK_TABS, ICookbookTab } from "./types";

export const COOKBOOK_TABS: ICookbookTab[] = [
	{
		title: "My recipes",
		icon: "bulb-outline",
		status: ENUM_COOKBOOK_TABS.MY_RECIPES
	},
	{
		title: "Favorites",
		icon: "bookmark",
		status: ENUM_COOKBOOK_TABS.FAVORITES
	}
];
