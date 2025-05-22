import { IRecipe } from "@/src/entities/recipe";

export const checkFirstStep = (myRecipes: IRecipe[]): boolean => {
	return !!myRecipes?.length;
};
