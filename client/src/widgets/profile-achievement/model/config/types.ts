import { IRecipe } from "@/src/entities/recipe";
import { IMAGES } from "@/src/shared/assets";

export interface IAchievement {
	title: string;
	description: string;
	image: typeof IMAGES;
	condition: (myRecipes: IRecipe[]) => boolean;
}
