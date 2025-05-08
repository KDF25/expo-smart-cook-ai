import icons from "react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";

export interface IIngredient {
	name: string;
	icon: string;
	quantity: string;
}

export interface IRecipe {
	id?: number;
	recipeName: string;
	description: string;
	ingredients: IIngredient[];
	steps: string[];
	calories: number;
	cookTime: number;
	serveTo: number;
	imagePrompt: string;
	userEmail?: string;
	category: string[];
}

export type MaterialCommunityIconName = keyof typeof icons;

export interface IInfoData {
	icon: MaterialCommunityIconName;
	name: string;
	unit: string;
	quantity: number;
}
