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

    const prompt = `As an expert travel planner with years of experience crafting personalized luxury itineraries, create a detailed day-by-day travel plan with the following specifications:

TRIP DETAILS:
- Destination: ${params.destination}
- Duration: ${params.days} days
- Group Size: ${params.people} ${
      Number(params.people) === 1 ? "person" : "people"
    }
- Budget Preference: ${params.budget} (User selected ${
      params.budget === "$" ? "one" : params.budget === "$$" ? "two" : "three"
    } dollar signs)
${
  params.interests
    ? `- Areas of Interest: ${params.interests} (While incorporating these interests, don't skip iconic attractions)`
    : ""
}

Please create a premium travel itinerary that balances:
1. Must-see iconic attractions of ${params.destination}
2. Activities aligned with the traveler's interests${
      params.interests ? ` (${params.interests})` : ""
    }
3. Hidden gems and local secrets that match the overall trip style
4. A mix of popular highlights and off-the-beaten-path experiences

The itinerary should include:
1. A thoughtful day-by-day breakdown with specific timing
2. Carefully curated restaurants and activities matching the selected budget level (${
      params.budget
    })
3. Strategic planning to minimize travel time between locations
4. Backup indoor activities for weather contingencies
5. Local cultural insights and customs to be aware of
6. Best times to visit each attraction to avoid crowds
7. Recommended photo opportunities
8. Transportation tips between locations (excluding airport transfers)
${
  params.budget === "$$$"
    ? "9. VIP experiences and exclusive access opportunities"
    : ""
}

Important: Do NOT include any hotel or accommodation recommendations. Focus only on daytime activities, attractions, and dining options.

Format each day as:

DAY [X]: [Day Theme/Focus]
- Morning: [Activities with timing]
- Afternoon: [Activities with timing]
- Evening: [Activities with timing]
- Dining Recommendations:
  * Lunch: [Restaurant with cuisine type and price point matching ${
    params.budget
  }]
  * Dinner: [Restaurant with cuisine type and price point matching ${
    params.budget
  }]
- Local Tips: [Insider advice for the day's activities]
- Photo Spots: [Best photo opportunities for the day's locations]

Make the itinerary flow naturally, considering travel time between locations and the best order to visit attractions. Each day should have a good mix of iconic attractions and interest-specific activities. Remember to exclude any accommodation suggestions.`;

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
