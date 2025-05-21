import { useState } from "react";
import { Alert } from "react-native";

import { RemoveRecipeFavorites } from "../api";

export const useRemoveRecipeFavorites = () => {
	const [isLoading, setIsLoading] = useState(false);

	const removeRecipe = (id: string): Promise<any> => {
		setIsLoading(true);
		return RemoveRecipeFavorites(id)
			.then((result) => {
				setIsLoading(false);
				Alert.alert("Recipe removed from favorites");
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				Alert.alert(
					"Error: removing recipe from favorites: " + error.message
				);
				throw error;
			});
	};

	return {
		removeRecipe,
		isLoading
	};
};
