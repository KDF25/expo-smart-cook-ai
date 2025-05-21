import { useState } from "react";
import { Alert } from "react-native";

import { AddRecipeFavorites } from "../api";
import { IFavorite } from "../types";

export const useAddRecipeFavorites = () => {
	const [isLoading, setIsLoading] = useState(false);

	const addRecipe = (data: IFavorite): Promise<any> => {
		setIsLoading(true);
		return AddRecipeFavorites(data)
			.then((result) => {
				setIsLoading(false);
				Alert.alert("Recipe added to favorites");
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				Alert.alert(
					"Error: adding recipe to favorites: " + error.message
				);
				throw error;
			});
	};

	return {
		addRecipe,
		isLoading
	};
};
