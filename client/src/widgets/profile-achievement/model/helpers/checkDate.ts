import { IRecipe } from "@/src/entities/recipe";

export const checkDate = (myRecipes: IRecipe[]): boolean => {
	if (!myRecipes?.length) return false;

	const earliestDate = myRecipes
		.map((r) => new Date(r.createdAt))
		.sort((a, b) => a.getTime() - b.getTime())[0];

	const now = new Date();
	const diffInMs = now.getTime() - earliestDate.getTime();
	const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

	return diffInDays >= 7;
};
