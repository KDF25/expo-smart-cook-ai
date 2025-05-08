import { IRecipe } from "../types";

import { baseApi } from "@/src/shared/api";

export const CreateNewRecipes = (data: IRecipe) =>
	baseApi.post("/recipes", { data: data });
