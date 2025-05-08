import { useState } from "react";
import { Alert } from "react-native";

import { AiModel } from "../api";
import { IRecipe } from "../types";

import { PROMPT_RECIPE } from "@/src/shared/constants";

export const useGenerateRecipe = (text: string) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<IRecipe[] | null>(null);

	const generateRecipe = async () => {
		if (!text) {
			Alert.alert("Please enter some text");
			return;
		}

		if (isLoading) {
			Alert.alert("Please wait few seconds");
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const prompt = `${text} ${PROMPT_RECIPE.GENERATE_COMPLETE_RECIPE_PROMPT}`;
			const apiResult = await AiModel(prompt);

			if (!apiResult?.choices || apiResult.choices.length === 0) {
				throw new Error("No valid result returned");
			}
			const recipes = apiResult?.choices[0]?.message?.content;
			setData(recipes && JSON.parse(recipes));
		} catch (err: any) {
			setError(err.message || "Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		error,
		data,
		generateRecipe
	};
};
