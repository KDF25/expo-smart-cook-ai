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
			console.log(userData);
			if (!userData) return;
			const result = await GetUserByEmail(userData.email!);
			console.log("result", result?.data?.data);
			if (result?.data?.data?.length) {
				console.log(1);
				setUser(result?.data?.data[0]);
			} else {
				console.log(2);
				const newData: IUser = {
					email: userData.email!,
					name: userData.name!,
					picture: userData.picture!
				};

				const response = await CreateNewUser(newData);
				console.log("response", response);
				setUser(response?.data?.data);
			}
			router.push("/(tabs)/home");
		});
	}, [isAuthenticated, getIdTokenClaims]);
};
