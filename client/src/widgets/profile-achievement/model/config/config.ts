import { checkDate, checkFirstStep, checkProgress } from "../helpers";

import { IAchievement } from "./types";
import { IMAGES } from "@/src/shared/assets";

export const ALL_ACHIEVEMENTS: IAchievement[] = [
	{
		title: "First Step",
		description: "You have create your first recipe",
		image: IMAGES.feet,
		condition: checkFirstStep
	},
	{
		title: "On a Roll",
		description: "Three recipes already? You’re on fire!",
		image: IMAGES.progress,
		condition: checkProgress
	},
	{
		title: "Sticking Around",
		description: "You've been with us for over a week. Glad you're here!",
		image: IMAGES.time,
		condition: checkDate
	}
];
