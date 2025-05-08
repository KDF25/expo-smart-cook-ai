import { IRecipe } from "../types";

import { baseApi } from "@/src/shared/api";

export const CreateNewRecipes = (data: IRecipe) =>
	baseApi.post("/recipes", { data: data });

export const GetRecipesByCategory = (category: string) =>
	baseApi.get(
		`/recipes?filters[category][$containsi]=${category}&fields=recipeName,description,id`
	);

export const GetRecipeById = (id: string | number) =>
	baseApi.get(`/recipes?filters[id][$eq]=${id}`);
