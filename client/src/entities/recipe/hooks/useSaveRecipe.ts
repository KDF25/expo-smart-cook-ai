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
				console.error("Error response:", error.response); // Структура ответа с ошибкой
				console.error("Error message:", error.message); // Сообщение об ошибке
				console.error("Error status:", error.response?.status); // Статус ошибки (например, 400 или 500)
				console.error("Error data:", error.response?.data);
				throw error;
			});
	};

	return {
		saveRecipe,
		isLoading
	};
};
