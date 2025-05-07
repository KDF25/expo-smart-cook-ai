import { IUser } from "../types";

import { baseApi } from "@/src/shared/api";

export const GetUserByEmail = (email: string) =>
	baseApi.get(`/user-lists?filters[email][$eq]=${email}`);

export const CreateNewUser = (data: IUser) =>
	baseApi.post("/user-lists", { data: data });
