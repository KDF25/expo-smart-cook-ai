import { useEffect, useRef, useState } from "react";

import { GetRecipesByCategory } from "../api";
import { IRecipe } from "../types";

export const useGetRecipesByCategory = (category: string) => {
	const [data, setData] = useState<IRecipe[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const isMounted = useRef(true);

	const fetchData = async (isRefetch = false) => {
		try {
			if (isRefetch) {
				setIsRefreshing(true);
			} else {
				setIsLoading(true);
			}
			const response = await GetRecipesByCategory(category);
			if (isMounted.current) {
				setData(response?.data?.data);
			}
		} catch (err: any) {
			if (isMounted.current) {
				setError(err.message || "Error");
			}
		} finally {
			if (isMounted.current) {
				setIsLoading(false);
				setIsRefreshing(false);
			}
		}
	};

	useEffect(() => {
		isMounted.current = true;
		fetchData();
		return () => {
			isMounted.current = false;
		};
	}, [category]);

	return {
		data,
		isLoading,
		isRefreshing,
		error,
		refetch: () => fetchData(true)
	};
};
