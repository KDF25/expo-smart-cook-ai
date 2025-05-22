import { IRecipe } from "@/src/entities/recipe";

export const getFavoriteCategory = (recipes: IRecipe[]) => {
	const frequencyMap: Record<string, number> = {};

	for (const recipe of recipes) {
		for (const category of recipe.category || []) {
			frequencyMap[category] = (frequencyMap[category] || 0) + 1;
		}
	}

	const sorted = Object.entries(frequencyMap).sort((a, b) => {
		if (b[1] !== a[1]) {
			return b[1] - a[1]; // по убыванию количества
		}
		return a[0].localeCompare(b[0]); // по алфавиту при равенстве
	});

	return sorted[0]?.[0] ?? null;
};
