import { useEffect, useState } from "react";

import { GetAllCategories } from "../api";
import { ICategory } from "../types";

export const useAllCategories = () => {
	const [data, setData] = useState<ICategory[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			try {
				const response = await GetAllCategories();
				if (isMounted) {
					setData(response?.data?.data);
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
