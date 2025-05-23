import { IFavorite, IRecipe } from "../types";

import { baseApi } from "@/src/shared/api";

export const CreateNewRecipes = (data: IRecipe) =>
	baseApi.post("/recipes", { data: data });

export const GetAllRecipes = (limit?: number) =>
	baseApi.get(
		`/recipes?sort[0]=id:desc` +
			`${limit ? `&pagination[limit]=${limit}` : ""}`
	);

export const GetAllUserRecipes = (email: string) =>
	baseApi.get(`/recipes?filters[userEmail][$eq]=${email}&sort[0]=id:desc`);

export const GetRecipesByCategory = (category: string) =>
	baseApi.get(
		`/recipes?filters[category][$containsi]=${category}&fields=recipeName,description,id&sort[0]=id:desc`
	);

export const GetRecipeById = (documentId: string) =>
	baseApi.get(`/recipes?filters[documentId][$eq]=${documentId}`);

export const AddRecipeFavorites = (data: IFavorite) =>
	baseApi.post(`/user-favorites`, { data: data });

export const RemoveRecipeFavorites = (id: string) =>
	baseApi.delete(`/user-favorites/${id}`);

export const GetAllUserFavorites = (email: string) =>
	baseApi.get(`/user-favorites?filters[userEmail][$eq]=${email}`);

export const GetAllUserFavoritesByIds = (query: string) =>
	baseApi.get(`/recipes?` + query);
