import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { useEffect } from "react";

import { CreateNewUser, GetUserByEmail } from "../api";
import { IUser } from "../types";

import { useUser } from "./useUser";

export const useCheckUser = () => {
	const { getIdTokenClaims, isAuthenticated } = useLogto();
	const { setUser } = useUser();
	const router = useRouter();
	useEffect(() => {
		if (!isAuthenticated) return;
		getIdTokenClaims().then(async (userData) => {
			if (!userData) return;
			const result = await GetUserByEmail(userData.email!);
			if (result?.data?.data?.length) {
				setUser(result?.data?.data[0]);
			} else {
				const newData: IUser = {
					email: userData.email!,
					name: userData.email?.split("@")[0] || "",
					picture: userData.picture!
				};

				const response = await CreateNewUser(newData);
				setUser(response?.data?.data);
			}
			router.push("/(tabs)/home");
		});
	}, [isAuthenticated, getIdTokenClaims]);
};
