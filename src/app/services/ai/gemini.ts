import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function generateItinerary({
  destination,
  days,
  people,
  interests,
  budget,
}: {
  destination: string;
  days: string;
  people: string;
  interests: string;
  budget: string;
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Create a detailed travel itinerary for:
- Destination: ${destination}
- Duration: ${days} days
- Number of people: ${people}
- Interests: ${interests}
- Budget level: ${budget}

Please provide a day-by-day breakdown of activities, considering the interests and budget level provided.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
}
