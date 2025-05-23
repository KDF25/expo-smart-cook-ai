import { useEffect, useState } from "react";

import { GetRecipeById } from "../api";
import { IRecipe } from "../types";

export const useGetRecipeById = (documentId: string) => {
	const [data, setData] = useState<IRecipe | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			try {
				const response = await GetRecipeById(documentId);
				if (isMounted) {
					setData(response?.data?.data?.[0]);
					setIsLoading(false);
				}
			} catch (err: any) {
				if (isMounted) {
					setError(err.message || "Error");
					setIsLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, []);

	return { data, isLoading, error };
};
