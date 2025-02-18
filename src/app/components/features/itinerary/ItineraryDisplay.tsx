import { TransitionContainer } from "../../common/TransitionContainer";
import { BlackButton } from "../../common/BlackButton";
import { transitions, typography, layout } from "../../../styles/common";
import { useEffect, useState } from "react";

interface ItineraryDisplayProps {
  isVisible: boolean;
  isLoading: boolean;
  itinerary: string | null;
  onBack: () => void;
}

export function ItineraryDisplay({
  isVisible,
  isLoading,
  itinerary,
  onBack,
}: ItineraryDisplayProps) {
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("travel-form-data");
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        // Get everything before the first comma, or use the whole string if no comma
        const city = (data.destinationLabel || data.destination || "")
          .split(",")[0]
          .trim();
        setCityName(city);
      } catch (e) {
        console.error("Error parsing localStorage data:", e);
      }
    }
  }, []);

  return (
    <TransitionContainer
      show={isVisible}
      type="slide"
      className={`absolute inset-0 w-full flex flex-col`}
    >
      {/* Header section */}
      <div className="sticky top-0 z-10 w-full bg-light-base dark:bg-dark-base border-b dark:border-dark-base/50 border-light-base/50">
        <div
          className={`${layout.maxWidth.lg} mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center`}
        >
          <BlackButton onClick={onBack} className="!px-3 !py-1.5 !text-sm mr-4">
            ← Back
          </BlackButton>
          <h1
            className={`${typography.gradientText} ${typography.h2} flex-1 text-center`}
          >
            {cityName ? `Your ${cityName} Itinerary` : "Your Itinerary"}
          </h1>
          {/* Empty div to balance the back button */}
          <div className="w-[68px]" />
        </div>
      </div>

      {/* Content section */}
      <div className="flex-1 overflow-auto">
        <div
          className={`${layout.maxWidth.lg} mx-auto px-4 md:px-6 lg:px-8 py-6`}
        >
          <div className="w-full bg-light-base/30 dark:bg-dark-base/30 rounded-2xl p-6 md:p-8 lg:p-10">
            {isLoading ? (
              <div className="space-y-8">
                {/* Title Section */}
                <div className="space-y-4">
                  <div className="h-8 bg-light-accent-primary/30 dark:bg-dark-accent-primary/30 rounded-xl w-3/4 animate-pulse" />
                  <div className="h-4 bg-light-accent-primary/20 dark:bg-dark-accent-primary/20 rounded-xl w-1/2 animate-pulse" />
                </div>

                {/* Days */}
                {[...Array(3)].map((_, dayIndex) => (
                  <div key={dayIndex} className="space-y-4">
                    {/* Day Header */}
                    <div className="h-6 bg-light-accent-primary/40 dark:bg-dark-accent-primary/40 rounded-xl w-32 mb-6 animate-pulse" />

                    {/* Morning */}
                    <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
                      <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-5/6 animate-pulse" />
                    </div>

                    {/* Afternoon */}
                    <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
                      <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-4/6 animate-pulse" />
                    </div>

                    {/* Evening */}
                    <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
                      <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
                      <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-3/4 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                {itinerary?.split("\n").map((line, i) => (
                  <p key={i} className="mb-4">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </TransitionContainer>
  );
}
