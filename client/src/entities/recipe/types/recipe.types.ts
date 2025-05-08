export interface Ingredient {
	name: string;
	icon: string;
	quantity: string;
}

export interface IRecipe {
	recipeName: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	calories: number;
	cookTime: number;
	serveTo: number;
	imagePrompt: string;
	userEmail?: string;
	category: string[];
}
