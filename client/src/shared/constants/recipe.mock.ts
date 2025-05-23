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
	},
	{
		recipeName: "🥪 Classic Club Sandwich",
		description:
			"A triple-decker sandwich with chicken, bacon, lettuce, and tomato.",
		ingredients: [
			{ name: "bread", icon: "🍞", quantity: "6 slices" },
			{ name: "chicken breast", icon: "🍗", quantity: "200g" },
			{ name: "bacon", icon: "🥓", quantity: "4 slices" },
			{ name: "lettuce", icon: "🥬", quantity: "4 leaves" },
			{ name: "tomato", icon: "🍅", quantity: "1" },
			{ name: "mayonnaise", icon: "🧴", quantity: "2 tbsp" }
		],
		steps: [
			"Grill the chicken breast and bacon until cooked.",
			"Toast the bread slices lightly.",
			"Layer the sandwich with chicken, bacon, lettuce, and tomato.",
			"Spread mayonnaise between layers.",
			"Cut diagonally and serve with fries."
		],
		calories: 650,
		cookTime: 25,
		serveTo: 1,
		imagePrompt:
			"A perfectly stacked club sandwich with crispy bacon, grilled chicken, and fresh vegetables on a wooden board.",
		category: ["Lunch"]
	},
	{
		recipeName: "🍕 Margherita Pizza",
		description:
			"Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
		ingredients: [
			{ name: "pizza dough", icon: "🫓", quantity: "1 ball" },
			{ name: "tomato sauce", icon: "🥫", quantity: "1 cup" },
			{ name: "mozzarella", icon: "🧀", quantity: "200g" },
			{ name: "fresh basil", icon: "🌿", quantity: "10 leaves" },
			{ name: "olive oil", icon: "🫒", quantity: "2 tbsp" }
		],
		steps: [
			"Roll out the pizza dough into a circle.",
			"Spread tomato sauce evenly on the dough.",
			"Add torn mozzarella pieces.",
			"Bake at 450°F for 12-15 minutes.",
			"Top with fresh basil and drizzle with olive oil."
		],
		calories: 800,
		cookTime: 30,
		serveTo: 2,
		imagePrompt:
			"A traditional Margherita pizza with melted mozzarella, fresh basil leaves, and a crispy crust.",
		category: ["Dinner"]
	},
	{
		recipeName: "🍜 Ramen Bowl",
		description:
			"Japanese noodle soup with rich broth, soft-boiled egg, and vegetables.",
		ingredients: [
			{ name: "ramen noodles", icon: "🍜", quantity: "200g" },
			{ name: "pork belly", icon: "🥓", quantity: "150g" },
			{ name: "egg", icon: "🥚", quantity: "1" },
			{ name: "green onions", icon: "🧅", quantity: "2" },
			{ name: "miso paste", icon: "🥣", quantity: "2 tbsp" }
		],
		steps: [
			"Cook ramen noodles according to package instructions.",
			"Prepare soft-boiled egg and slice pork belly.",
			"Make broth with miso paste and seasonings.",
			"Assemble bowl with noodles, broth, and toppings.",
			"Garnish with sliced green onions."
		],
		calories: 580,
		cookTime: 35,
		serveTo: 1,
		imagePrompt:
			"A steaming bowl of ramen with curly noodles, soft-boiled egg, and sliced pork belly in rich broth.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🥘 Paella",
		description: "Spanish rice dish with seafood, chicken, and saffron.",
		ingredients: [
			{ name: "rice", icon: "🍚", quantity: "300g" },
			{ name: "shrimp", icon: "🦐", quantity: "200g" },
			{ name: "chicken", icon: "🍗", quantity: "200g" },
			{ name: "saffron", icon: "🧂", quantity: "1 pinch" },
			{ name: "bell peppers", icon: "🫑", quantity: "2" }
		],
		steps: [
			"Toast rice with saffron and garlic.",
			"Add chicken and cook until golden.",
			"Add seafood and vegetables.",
			"Pour in broth and simmer until rice is cooked.",
			"Let rest for 5 minutes before serving."
		],
		calories: 720,
		cookTime: 45,
		serveTo: 4,
		imagePrompt:
			"A colorful paella pan filled with golden rice, seafood, and vegetables, garnished with lemon wedges.",
		category: ["Dinner"]
	},
	{
		recipeName: "🥐 Croissant",
		description: "Buttery, flaky French pastry perfect for breakfast.",
		ingredients: [
			{ name: "flour", icon: "🌾", quantity: "500g" },
			{ name: "butter", icon: "🧈", quantity: "300g" },
			{ name: "yeast", icon: "🧫", quantity: "7g" },
			{ name: "sugar", icon: "🍚", quantity: "50g" },
			{ name: "salt", icon: "🧂", quantity: "10g" }
		],
		steps: [
			"Prepare dough with flour, yeast, and sugar.",
			"Layer with butter and fold multiple times.",
			"Shape into crescents and proof.",
			"Bake until golden and flaky.",
			"Cool slightly before serving."
		],
		calories: 400,
		cookTime: 180,
		serveTo: 8,
		imagePrompt:
			"Golden, flaky croissants arranged on a rustic wooden board with a dusting of powdered sugar.",
		category: ["Breakfast", "Dessert"]
	},
	{
		recipeName: "🍖 Beef Wellington",
		description:
			"Tender beef fillet wrapped in puff pastry with mushroom duxelles.",
		ingredients: [
			{ name: "beef fillet", icon: "🥩", quantity: "500g" },
			{ name: "puff pastry", icon: "🥐", quantity: "1 sheet" },
			{ name: "mushrooms", icon: "🍄", quantity: "300g" },
			{ name: "prosciutto", icon: "🥓", quantity: "6 slices" },
			{ name: "mustard", icon: "🧂", quantity: "2 tbsp" }
		],
		steps: [
			"Prepare mushroom duxelles and cool.",
			"Sear beef fillet and coat with mustard.",
			"Wrap in prosciutto and mushroom mixture.",
			"Encase in puff pastry and bake.",
			"Rest before slicing and serving."
		],
		calories: 850,
		cookTime: 90,
		serveTo: 4,
		imagePrompt:
			"A perfectly cooked Beef Wellington with golden puff pastry crust, served with roasted vegetables.",
		category: ["Dinner"]
	},
	{
		recipeName: "🥗 Caesar Salad",
		description:
			"Classic salad with romaine lettuce, croutons, and Caesar dressing.",
		ingredients: [
			{ name: "romaine lettuce", icon: "🥬", quantity: "1 head" },
			{ name: "croutons", icon: "🍞", quantity: "1 cup" },
			{ name: "parmesan", icon: "🧀", quantity: "50g" },
			{ name: "anchovies", icon: "🐟", quantity: "4 fillets" },
			{ name: "caesar dressing", icon: "🧴", quantity: "1/4 cup" }
		],
		steps: [
			"Wash and chop romaine lettuce.",
			"Prepare homemade croutons.",
			"Make Caesar dressing with anchovies.",
			"Toss lettuce with dressing and croutons.",
			"Top with shaved parmesan."
		],
		calories: 320,
		cookTime: 20,
		serveTo: 2,
		imagePrompt:
			"A crisp Caesar salad with golden croutons, shaved parmesan, and creamy dressing in a white bowl.",
		category: ["Lunch"]
	},
	{
		recipeName: "🍰 Tiramisu",
		description:
			"Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
		ingredients: [
			{ name: "ladyfingers", icon: "🍪", quantity: "200g" },
			{ name: "mascarpone", icon: "🧀", quantity: "500g" },
			{ name: "coffee", icon: "☕", quantity: "2 cups" },
			{ name: "eggs", icon: "🥚", quantity: "4" },
			{ name: "cocoa powder", icon: "🍫", quantity: "2 tbsp" }
		],
		steps: [
			"Prepare strong coffee and let cool.",
			"Make mascarpone cream with eggs and sugar.",
			"Dip ladyfingers in coffee.",
			"Layer with cream and dust with cocoa.",
			"Refrigerate for 4 hours before serving."
		],
		calories: 450,
		cookTime: 30,
		serveTo: 6,
		imagePrompt:
			"A classic tiramisu with layers of coffee-soaked ladyfingers and creamy mascarpone, dusted with cocoa powder.",
		category: ["Dessert"]
	},
	{
		recipeName: "🍣 California Roll",
		description: "Inside-out sushi roll with crab, avocado, and cucumber.",
		ingredients: [
			{ name: "sushi rice", icon: "🍚", quantity: "2 cups" },
			{ name: "nori", icon: "🌿", quantity: "4 sheets" },
			{ name: "crab meat", icon: "🦀", quantity: "200g" },
			{ name: "avocado", icon: "🥑", quantity: "1" },
			{ name: "cucumber", icon: "🥒", quantity: "1" }
		],
		steps: [
			"Prepare sushi rice with vinegar.",
			"Slice vegetables and crab meat.",
			"Roll with rice on outside.",
			"Cut into pieces.",
			"Serve with soy sauce and wasabi."
		],
		calories: 380,
		cookTime: 40,
		serveTo: 2,
		imagePrompt:
			"A platter of California rolls with orange roe, served with soy sauce and wasabi on a black plate.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🍲 Tom Yum Soup",
		description: "Spicy and sour Thai soup with shrimp and mushrooms.",
		ingredients: [
			{ name: "shrimp", icon: "🦐", quantity: "300g" },
			{ name: "mushrooms", icon: "🍄", quantity: "200g" },
			{ name: "lemongrass", icon: "🌿", quantity: "2 stalks" },
			{ name: "lime", icon: "🍋", quantity: "2" },
			{ name: "chili", icon: "🌶️", quantity: "3" }
		],
		steps: [
			"Prepare broth with lemongrass and herbs.",
			"Add mushrooms and cook.",
			"Add shrimp and cook until pink.",
			"Season with lime juice and fish sauce.",
			"Garnish with fresh herbs."
		],
		calories: 280,
		cookTime: 25,
		serveTo: 2,
		imagePrompt:
			"A steaming bowl of Tom Yum soup with shrimp, mushrooms, and fresh herbs in a ceramic bowl.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🥘 Ratatouille",
		description:
			"French vegetable stew with eggplant, zucchini, and tomatoes.",
		ingredients: [
			{ name: "eggplant", icon: "🍆", quantity: "1" },
			{ name: "zucchini", icon: "🥒", quantity: "2" },
			{ name: "tomatoes", icon: "🍅", quantity: "4" },
			{ name: "bell peppers", icon: "🫑", quantity: "2" },
			{ name: "herbs", icon: "🌿", quantity: "1 bunch" }
		],
		steps: [
			"Slice vegetables evenly.",
			"Layer in a baking dish.",
			"Add herbs and olive oil.",
			"Bake until vegetables are tender.",
			"Serve hot or cold."
		],
		calories: 220,
		cookTime: 60,
		serveTo: 4,
		imagePrompt:
			"A colorful ratatouille with layered vegetables, fresh herbs, and a golden crust.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🍪 Chocolate Chip Cookies",
		description: "Classic American cookies with chocolate chips.",
		ingredients: [
			{ name: "flour", icon: "🌾", quantity: "2 cups" },
			{ name: "butter", icon: "🧈", quantity: "200g" },
			{ name: "chocolate chips", icon: "🍫", quantity: "200g" },
			{ name: "sugar", icon: "🍚", quantity: "1 cup" },
			{ name: "eggs", icon: "🥚", quantity: "2" }
		],
		steps: [
			"Cream butter and sugar.",
			"Add eggs and mix.",
			"Fold in flour and chocolate chips.",
			"Bake until golden.",
			"Cool on wire rack."
		],
		calories: 180,
		cookTime: 25,
		serveTo: 12,
		imagePrompt:
			"Freshly baked chocolate chip cookies with melted chocolate, arranged on a cooling rack.",
		category: ["Dessert"]
	},
	{
		recipeName: "🥘 Coq au Vin",
		description:
			"French chicken stew braised in wine with mushrooms and bacon.",
		ingredients: [
			{ name: "chicken", icon: "🍗", quantity: "1 whole" },
			{ name: "wine", icon: "🍷", quantity: "750ml" },
			{ name: "mushrooms", icon: "🍄", quantity: "300g" },
			{ name: "bacon", icon: "🥓", quantity: "200g" },
			{ name: "pearl onions", icon: "🧅", quantity: "200g" }
		],
		steps: [
			"Marinate chicken in wine.",
			"Brown chicken and bacon.",
			"Add vegetables and wine.",
			"Simmer until tender.",
			"Serve with crusty bread."
		],
		calories: 650,
		cookTime: 120,
		serveTo: 4,
		imagePrompt:
			"A rustic pot of Coq au Vin with tender chicken, mushrooms, and pearl onions in rich wine sauce.",
		category: ["Dinner"]
	},
	{
		recipeName: "🥗 Greek Salad",
		description: "Fresh Mediterranean salad with feta cheese and olives.",
		ingredients: [
			{ name: "cucumber", icon: "🥒", quantity: "1" },
			{ name: "tomatoes", icon: "🍅", quantity: "3" },
			{ name: "feta cheese", icon: "🧀", quantity: "200g" },
			{ name: "olives", icon: "🫒", quantity: "100g" },
			{ name: "olive oil", icon: "🫒", quantity: "3 tbsp" }
		],
		steps: [
			"Chop vegetables into chunks.",
			"Add olives and feta.",
			"Dress with olive oil.",
			"Season with oregano.",
			"Serve chilled."
		],
		calories: 280,
		cookTime: 15,
		serveTo: 2,
		imagePrompt:
			"A vibrant Greek salad with chunks of feta cheese, Kalamata olives, and fresh vegetables.",
		category: ["Lunch"]
	},
	{
		recipeName: "🍜 Pad Thai",
		description:
			"Thai stir-fried rice noodles with peanuts and tamarind sauce.",
		ingredients: [
			{ name: "rice noodles", icon: "🍜", quantity: "200g" },
			{ name: "tofu", icon: "🧊", quantity: "200g" },
			{ name: "peanuts", icon: "🥜", quantity: "100g" },
			{ name: "bean sprouts", icon: "🌱", quantity: "100g" },
			{ name: "tamarind sauce", icon: "🥣", quantity: "3 tbsp" }
		],
		steps: [
			"Soak noodles in warm water.",
			"Stir-fry tofu and vegetables.",
			"Add noodles and sauce.",
			"Top with peanuts.",
			"Garnish with lime and herbs."
		],
		calories: 520,
		cookTime: 30,
		serveTo: 2,
		imagePrompt:
			"A plate of Pad Thai with rice noodles, tofu, peanuts, and fresh herbs, garnished with lime wedges.",
		category: ["Lunch", "Dinner"]
	},
	{
		recipeName: "🥘 Beef Bourguignon",
		description:
			"French beef stew braised in red wine with mushrooms and pearl onions.",
		ingredients: [
			{ name: "beef", icon: "🥩", quantity: "1kg" },
			{ name: "red wine", icon: "🍷", quantity: "750ml" },
			{ name: "mushrooms", icon: "🍄", quantity: "300g" },
			{ name: "pearl onions", icon: "🧅", quantity: "200g" },
			{ name: "bacon", icon: "🥓", quantity: "200g" }
		],
		steps: [
			"Brown beef and bacon.",
			"Add wine and vegetables.",
			"Simmer until tender.",
			"Add mushrooms and onions.",
			"Serve with mashed potatoes."
		],
		calories: 780,
		cookTime: 180,
		serveTo: 6,
		imagePrompt:
			"A rich Beef Bourguignon with tender beef, mushrooms, and pearl onions in red wine sauce.",
		category: ["Dinner"]
	},
	{
		recipeName: "🥗 Caprese Salad",
		description:
			"Italian salad with fresh mozzarella, tomatoes, and basil.",
		ingredients: [
			{ name: "mozzarella", icon: "🧀", quantity: "200g" },
			{ name: "tomatoes", icon: "🍅", quantity: "3" },
			{ name: "basil", icon: "🌿", quantity: "1 bunch" },
			{ name: "olive oil", icon: "🫒", quantity: "2 tbsp" },
			{ name: "balsamic", icon: "🧴", quantity: "1 tbsp" }
		],
		steps: [
			"Slice tomatoes and mozzarella.",
			"Arrange on plate.",
			"Add fresh basil leaves.",
			"Drizzle with olive oil.",
			"Add balsamic reduction."
		],
		calories: 320,
		cookTime: 10,
		serveTo: 2,
		imagePrompt:
			"A fresh Caprese salad with sliced tomatoes, mozzarella, and basil leaves, drizzled with balsamic.",
		category: ["Lunch"]
	}
];
