import { useEffect, useRef, useState } from "react";

import { GetAllRecipes } from "../api";
import { IRecipe } from "../types";

export const useGetAllRecipes = (limit?: number) => {
	const [data, setData] = useState<IRecipe[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState<null | string>(null);
	const isMounted = useRef(true);

	const fetchData = async (isRefetch = false) => {
		try {
			if (isRefetch) {
				setIsRefreshing(true);
			} else {
				setIsLoading(true);
			}
			const response = await GetAllRecipes(limit);
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
	}, []);

	return {
		data,
		isLoading,
		isRefreshing,
		error,
		refetch: () => fetchData(true)
	};
};
