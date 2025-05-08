export const PROMPT_RECIPE = {
	GENERATE_RECIPE_OPTION_PROMPT: `Depends on user instruction create 3 different Recipe variant with Recipe Name with Emoji, 2 line description and main ingredient list in JSON format with field recipeName, description, ingredients`,

	GENERATE_COMPLETE_RECIPE_PROMPT: `
      You are a JSON API generator.

      Return only a valid JSON array with 3 objects. Do not include any explanations or text outside the JSON. Do not add comments.

      Follow this exact structure:

      type Category = "Breakfast" | "Coffee" | "Dinner" | "Drinks" | "Fast Food" | "Ice Cream" | "Lunch" | "Dessert";

      [
        {
          "recipeName": string,
          "description": string,
          "ingredients": [
            { "name": string, "icon": string, "quantity": string }
          ],
          "steps": [{ "stepId": number, "text": string }],
          "calories": number,
          "cookTime": number,
          "serveTo": number,
          "imagePrompt": string,
          "category": Category[]

        }
      ]

      The content of the fields must match the recipe name and description (provided earlier).

      - The ingredients must contain name, emoji as icon, and quantity.
      - Steps must be clear and sequential.
      - Calories and cookTime must be numbers (not strings).
      - serveTo must be a number.
      - imagePrompt must describe the dish visually, without adding unrelated items (like toast or orange juice unless the recipe includes them).
      - categories should list all possible categories the dish might belong to (choose based on the recipe).

      Only output the JSON array above.
      Do NOT wrap the JSON in markdown or code blocks. Just return plain JSON.
    `
};
