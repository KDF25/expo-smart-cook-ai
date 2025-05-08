import { useState } from "react";

import { CreateNewRecipes } from "../api";
import { IRecipe } from "../types";

export const useSaveRecipe = () => {
	const [isLoading, setIsLoading] = useState(false);

	const saveRecipe = (recipe: IRecipe): Promise<any> => {
		setIsLoading(true);
		return CreateNewRecipes(recipe)
			.then((result) => {
				setIsLoading(false);
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				throw error;
			});
	};

	return {
		saveRecipe,
		isLoading
	};
};
