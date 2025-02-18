"use client";
import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Welcome } from "./components/features/welcome/Welcome";
import { TravelForm } from "./components/features/travel-form/TravelForm";
import { ItineraryDisplay } from "./components/features/itinerary/ItineraryDisplay";

export const dynamic = "force-dynamic";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [showItinerary, setShowItinerary] = useState(false);

  const handleGenerateItinerary = async (responsePromise: Promise<string>) => {
    console.log("Generate clicked, setting states...");
    // Immediately show loading state and itinerary view
    setIsGenerating(true);
    setShowItinerary(true);
    setItinerary(null);

    try {
      console.log("Waiting for API response...");
      const result = await responsePromise;
      console.log("Got API response, updating itinerary...");
      setItinerary(result);
    } catch (error) {
      console.error("Error generating itinerary:", error);
      // You might want to show an error state here
    } finally {
      console.log("Setting isGenerating to false");
      setIsGenerating(false);
    }
  };

  console.log("Current states:", {
    isGenerating,
    showItinerary,
    hasItinerary: !!itinerary,
  });

  const handleBack = () => {
    setShowItinerary(false);
    setItinerary(null);
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-dark-base bg-light-base">
      <Header isStarted={isStarted} onTitleClick={() => setIsStarted(false)} />

      <main className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-full transition-all duration-300 ${
              isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Welcome isStarted={isStarted} onBegin={() => setIsStarted(true)} />
          </div>
        </div>

        <div
          className={`absolute inset-0 flex items-start justify-center transition-all duration-300 pt-6 ${
            isStarted ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <TravelForm
            isStarted={isStarted && !showItinerary}
            onGenerate={handleGenerateItinerary}
          />
          <ItineraryDisplay
            isVisible={showItinerary}
            isLoading={isGenerating}
            itinerary={itinerary}
            onBack={handleBack}
          />
        </div>
      </main>
    </div>
  );
}

/**
 * Component Structure Explanation:
 *
 * src/app/components/
 * ├── common/             # Reusable components used across the app
 * │   ├── ThemeToggle    # UI components, buttons, inputs, etc.
 * │   ├── Input          # Common input component with neumorphic style
 * │   └── Button         # Common button component with neumorphic style
 * │
 * ├── layout/            # Structural components that define the app's layout
 * │   └── Header         # Header, footer, sidebar, etc.
 * │
 * ├── features/          # Feature-specific components grouped by feature
 * │   ├── welcome/       # Components related to the welcome feature
 * │   │   └── Welcome    # Can include sub-components, hooks, utils specific to feature
 * │   └── travel-form/   # Components related to the travel form feature
 * │       └── TravelForm # Main form component for travel itinerary planning
 * │
 * └── [future folders]   # As app grows, can add:
 *     ├── hooks/         # Custom React hooks
 *     ├── utils/         # Utility functions and helpers
 *     ├── types/         # TypeScript type definitions
 *     └── context/       # React context providers
 */
