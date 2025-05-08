import OpenAI from "openai";

export const baseOpenAI = new OpenAI({
	baseURL: "https://openrouter.ai/api/v1",
	apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY
});
