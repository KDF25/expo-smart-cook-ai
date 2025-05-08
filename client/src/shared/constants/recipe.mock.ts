export const RECIPES_MOCK = [
	{
		recipeName: "🍳 Scrambled Eggs Delight",
		description:
			"Fluffy scrambled eggs cooked with sautéed onions for a warm breakfast treat.",
		ingredients: [
			{ name: "eggs", icon: "🥚", quantity: "2" },
			{ name: "onion", icon: "🧅", quantity: "1 medium" },
			{ name: "butter", icon: "🧈", quantity: "1 tbsp" },
			{ name: "salt", icon: "🧂", quantity: "a pinch" }
		],
		steps: [
			"Finely chop the onion.",
			"Whisk the eggs with a pinch of salt.",
			"Melt butter in a pan and sauté the chopped onion until soft.",
			"Add the whisked eggs to the pan and cook on low heat until fluffy.",
			"Serve hot and enjoy your warm breakfast."
		],
		calories: 250,
		cookTime: 10,
		serveTo: 1,
		imagePrompt:
			"A plate of fluffy scrambled eggs with golden onions, served hot on a white plate in a cozy kitchen setting.",
		category: ["Breakfast"]
	},
	{
		recipeName: "🥗 Fresh Veggie Salad",
		description:
			"A crisp and refreshing salad with tomatoes, cucumbers, and bell peppers.",
		ingredients: [
			{ name: "tomato", icon: "🍅", quantity: "2" },
			{ name: "cucumber", icon: "🥒", quantity: "1" },
			{ name: "bell pepper", icon: "🫑", quantity: "1" },
			{ name: "olive oil", icon: "🫒", quantity: "1 tbsp" },
			{ name: "salt", icon: "🧂", quantity: "to taste" }
		],
		steps: [
			"Wash and chop the tomatoes, cucumber, and bell pepper.",
			"Combine all the vegetables in a large mixing bowl.",
			"Drizzle with olive oil and sprinkle with salt to taste.",
			"Toss gently to mix and serve fresh."
		],
		calories: 180,
		cookTime: 8,
		serveTo: 2,
		imagePrompt:
			"A vibrant bowl of fresh vegetable salad with red tomatoes, green cucumbers, and yellow bell peppers on a wooden table.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🍝 Creamy Pasta Bowl",
		description:
			"Rich and creamy pasta tossed with garlic and cheese for a comforting meal.",
		ingredients: [
			{ name: "pasta", icon: "🍝", quantity: "150g" },
			{ name: "cream", icon: "🥛", quantity: "100ml" },
			{ name: "garlic", icon: "🧄", quantity: "2 cloves" },
			{ name: "cheese", icon: "🧀", quantity: "50g" },
			{ name: "salt", icon: "🧂", quantity: "to taste" }
		],
		steps: [
			"Boil the pasta in salted water until al dente.",
			"While the pasta cooks, sauté the minced garlic in a pan with a little butter or oil.",
			"Add the cream to the pan and simmer for 2 minutes to thicken.",
			"Mix the cooked pasta into the creamy garlic sauce, then add the cheese and stir until melted.",
			"Season with salt to taste and serve hot for a comforting meal."
		],
		calories: 520,
		cookTime: 20,
		serveTo: 2,
		imagePrompt:
			"A creamy bowl of pasta with melted cheese and garlic sauce, served in a ceramic bowl with steam rising.",
		category: ["Dinner"]
	}
];
