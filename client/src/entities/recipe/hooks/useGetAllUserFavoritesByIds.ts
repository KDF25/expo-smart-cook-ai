import { useEffect, useMemo, useRef, useState } from "react";

import { GetAllUserFavoritesByIds } from "../api";
import { IRecipe } from "../types";

import { useGetAllUserFavorites } from "./useGetAllUserFavorites";

interface Props {
	email: string;
	skip?: boolean;
}

export const useGetAllUserFavoritesByIds = ({ email, skip }: Props) => {
	const { data: favorites } = useGetAllUserFavorites({
		email: email
	});

	const [data, setData] = useState<IRecipe[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState<null | string>(null);
	const isMounted = useRef(true);

	const ids = useMemo(() => {
		return favorites.map((favorite) => favorite?.recipeDocumentId) || [];
	}, [favorites]);
	const query = useMemo(() => {
		return ids.map((id) => `filters[documentId][$eq]=${id}`).join("&");
	}, [ids]);

	const fetchData = async (isRefetch = false) => {
		try {
			if (isRefetch) {
				setIsRefreshing(true);
			} else {
				setIsLoading(true);
			}
			const response = await GetAllUserFavoritesByIds(query);
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

		if (ids.length === 0) return;

		isMounted.current = true;
		fetchData();
		return () => {
			isMounted.current = false;
		};
	}, [skip, ids]);

	return {
		data,
		isLoading,
		isRefreshing,
		error,
		refetch: () => fetchData(true)
	};
};
