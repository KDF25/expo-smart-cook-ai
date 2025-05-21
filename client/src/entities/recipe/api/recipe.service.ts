import { IRecipe } from "../types";

import { baseApi } from "@/src/shared/api";

export const CreateNewRecipes = (data: IRecipe) =>
	baseApi.post("/recipes", { data: data });

export const GetAllRecipes = (limit?: number) =>
	baseApi.get(
		`/recipes?sort[0]=id:desc` +
			`${limit ? `&pagination[limit]=${limit}` : ""}`
	);

export const GetAllUserRecipes = (email: string) =>
	baseApi.get(
		`/recipes?filters[userEmail][$eq]=${email}&sort[0]=id:desc`
	);

export const GetRecipesByCategory = (category: string) =>
	baseApi.get(
		`/recipes?filters[category][$containsi]=${category}&fields=recipeName,description,id`
	);

export const GetRecipeById = (id: string | number) =>
	baseApi.get(`/recipes?filters[id][$eq]=${id}`);
