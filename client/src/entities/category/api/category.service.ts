import { baseApi } from "@/src/shared/api";

export const GetAllCategories = () => baseApi.get("/categories?populate=*");
