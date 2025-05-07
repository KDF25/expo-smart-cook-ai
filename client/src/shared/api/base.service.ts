import axios from "axios";

export const baseApi = axios.create({
	baseURL: process.env.EXPO_PUBLIC_BASE_API_URL,
	headers: {
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`
	}
});
