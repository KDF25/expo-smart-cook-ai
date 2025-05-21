import { useEffect, useRef, useState } from "react";

import { GetAllUserRecipes } from "../api";
import { IRecipe } from "../types";

interface Props {
	email: string;
	skip?: boolean;
}

export const useGetAllUserRecipes = ({ email, skip }: Props) => {
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
			const response = await GetAllUserRecipes(email);
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
		if (skip) return;
		isMounted.current = true;
		fetchData();
		return () => {
			isMounted.current = false;
		};
	}, [skip, email]);

	return {
		data,
		isLoading,
		isRefreshing,
		error,
		refetch: () => fetchData(true)
	};
};
