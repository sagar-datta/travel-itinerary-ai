import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ItineraryGenerationParams } from "./types";
import { ItineraryGenerationError } from "./types";

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function generateItinerary(
  params: ItineraryGenerationParams
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Create a detailed travel itinerary for ${
      params.days
    } days in ${params.destination} for ${params.people} ${
      Number(params.people) === 1 ? "person" : "people"
    }${params.interests ? ` interested in ${params.interests}` : ""}${
      params.budget
        ? ` with a ${
            params.budget === "$"
              ? "budget"
              : params.budget === "$$"
              ? "moderate"
              : "luxury"
          } budget`
        : ""
    }.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new ItineraryGenerationError(
        "Failed to generate itinerary text",
        "EMPTY_RESPONSE"
      );
    }

    return text;
  } catch (error) {
    if (error instanceof ItineraryGenerationError) {
      throw error;
    }

    throw new ItineraryGenerationError(
      "Failed to generate itinerary",
      "GENERATION_FAILED",
      error
    );
  }
}
