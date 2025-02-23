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

    const budgetLevel =
      params.budget === "$"
        ? "budget-friendly"
        : params.budget === "$$"
        ? "mid-range"
        : "luxury";

    const prompt = `As an expert travel planner with years of experience crafting personalized luxury itineraries, create a detailed day-by-day travel plan with the following specifications:

TRIP DETAILS:
- Destination: ${params.destination}
- Duration: ${params.days} days
- Group Size: ${params.people} ${
      Number(params.people) === 1 ? "person" : "people"
    }
- Budget Level: ${budgetLevel}
${params.interests ? `- Special Interests: ${params.interests}` : ""}

Please create a premium travel itinerary that includes:
1. A thoughtful day-by-day breakdown with specific timing
2. Carefully curated restaurants matching the ${budgetLevel} preference
3. Hidden gems and local secrets, not just tourist spots
4. Strategic planning to minimize travel time between locations
5. Backup indoor activities for weather contingencies
6. Local cultural insights and customs to be aware of
7. Best times to visit each attraction to avoid crowds
8. Recommended photo opportunities
9. Transportation tips between locations
${
  params.budget === "$$$"
    ? "10. VIP experiences and exclusive access opportunities"
    : ""
}

Format each day as:

DAY [X]: [Day Theme/Focus]
- Morning: [Activities with timing]
- Afternoon: [Activities with timing]
- Evening: [Activities with timing]
- Dining Recommendations:
  * Lunch: [Restaurant with cuisine type and price range]
  * Dinner: [Restaurant with cuisine type and price range]
- Local Tips: [Insider advice for the day]

Make the itinerary flow naturally, considering travel time between locations and the best order to visit attractions. Balance popular highlights with hidden gems.`;

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
