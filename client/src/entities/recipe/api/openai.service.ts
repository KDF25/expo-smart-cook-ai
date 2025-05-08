import { baseOpenAI } from "@/src/shared/api";

export const AiModel = async (prompt: string) => {
	return await baseOpenAI.chat.completions.create({
		model: process.env.EXPO_PUBLIC_OPENROUTER_AI_MODEL || "",
		messages: [{ role: "user", content: prompt }],
		response_format: { type: "json_object" }
	});
};
