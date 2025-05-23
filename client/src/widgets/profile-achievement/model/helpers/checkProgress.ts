import { IRecipe } from "@/src/entities/recipe";

export const checkProgress = (myRecipes: IRecipe[]): boolean => {
	return myRecipes?.length >= 3;
};
