import { ENUM_CHART_TABS } from "../config";

import { getStartOfWeek } from "./getStartOfWeek";
import { IRecipe } from "@/src/entities/recipe";

export const getCountRecipes = (
	recipes: IRecipe[],
	status: ENUM_CHART_TABS
) => {
	const now = new Date();
	const result: { labels: string[]; values: number[] } = {
		labels: [],
		values: []
	};

	const grouped: Record<string, number> = {};

	if (status === ENUM_CHART_TABS.WEEK) {
		const startOfWeek = getStartOfWeek(now);

		for (let i = 0; i < 7; i++) {
			const current = new Date(startOfWeek);
			current.setDate(current.getDate() + i);
			const key = current.toISOString().slice(0, 10);
			grouped[key] = 0;
		}

		recipes.forEach((recipe) => {
			const dateKey = recipe.createdAt.slice(0, 10);
			if (grouped[dateKey] !== undefined) {
				grouped[dateKey]++;
			}
		});

		result.labels = Object.keys(grouped).map((dateStr) => {
			const d = new Date(dateStr);
			return d.toLocaleDateString(undefined, { weekday: "short" }); // "Mon"
		});
		result.values = Object.values(grouped);
	} else if (status === ENUM_CHART_TABS.MONTH) {
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		const grouped: Record<string, number> = {};

		for (let i = 1; i <= daysInMonth; i++) {
			const key = new Date(Date.UTC(year, month, i))
				.toISOString()
				.slice(0, 10);
			grouped[key] = 0;
		}

		recipes.forEach((recipe) => {
			const dateKey = recipe.createdAt.slice(0, 10);
			if (grouped[dateKey] !== undefined) {
				grouped[dateKey]++;
			}
		});

		const sortedEntries = Object.entries(grouped).sort(
			([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
		);

		result.labels = sortedEntries.map(([dateStr]) => {
			const d = new Date(dateStr);
			return d.getDate().toString();
		});
		result.values = sortedEntries.map(([, count]) => count);
	} else if (status === ENUM_CHART_TABS.YEAR) {
		const months = Array.from({ length: 12 }, (_, i) => i); // 0...11

		months.forEach((m) => {
			const key = `${now.getFullYear()}-${String(m + 1).padStart(2, "0")}`;
			grouped[key] = 0;
		});

		recipes.forEach((recipe) => {
			const date = new Date(recipe.createdAt);
			const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
			if (grouped[key] !== undefined) {
				grouped[key]++;
			}
		});

		result.labels = months.map((m) => {
			return new Date(0, m).toLocaleString(undefined, { month: "short" }); // "Jan"
		});
		result.values = Object.values(grouped);
	}

	return result;
};
