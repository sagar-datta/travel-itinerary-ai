import { useState } from "react";
import type { FormData } from "../types";
import type { ItineraryGenerationError } from "@/app/services/ai/types";

export function useItineraryState() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [showItinerary, setShowItinerary] = useState(false);
  const [error, setError] = useState<ItineraryGenerationError | null>(null);
  const [formData, setFormData] = useState<FormData>({
    destination: "",
    destinationLabel: "",
    days: "1",
    people: "1",
  });

  const handleGenerateItinerary = async (
    responsePromise: Promise<string>,
    submittedFormData: FormData
  ) => {
    setIsGenerating(true);
    setShowItinerary(true);
    setItinerary(null);
    setError(null);
    setFormData(submittedFormData);

    try {
      const result = await responsePromise;
      setItinerary(result);
    } catch (error) {
      console.error("Error generating itinerary:", error);
      setError(error as ItineraryGenerationError);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBack = () => {
    setShowItinerary(false);
    setItinerary(null);
    setError(null);
  };

  return {
    state: {
      isGenerating,
      itinerary,
      showItinerary,
      formData,
      error,
    },
    actions: {
      handleGenerateItinerary,
      handleBack,
    },
  };
}
