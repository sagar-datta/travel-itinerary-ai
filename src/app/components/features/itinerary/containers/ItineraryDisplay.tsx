import { TransitionContainer } from "@/app/components/common/TransitionContainer";
import { typography, layout } from "@/app/lib/styles";
import { Header } from "../components/Header";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { ItineraryContent } from "../components/ItineraryContent";
import type { ItineraryDisplayProps } from "../types";
import type { ItineraryGenerationError } from "@/app/services/ai/types";

export function ItineraryDisplay({
  isVisible,
  isLoading,
  itinerary,
  error,
  onBack,
  formData,
}: ItineraryDisplayProps & { error?: ItineraryGenerationError | null }) {
  const cityName =
    formData.destinationLabel?.split(",")[0] ||
    formData.destination.split(",")[0];
  const nightsText = `${formData.days} ${
    Number(formData.days) === 1 ? "night" : "nights"
  }`;
  const peopleText = `${formData.people} ${
    Number(formData.people) === 1 ? "person" : "people"
  }`;

  const tripTitle = formData.destination
    ? `Your ${cityName} Itinerary (${nightsText}, ${peopleText})`
    : "Your Trip";

  return (
    <TransitionContainer
      show={isVisible}
      type="fade"
      className={`absolute inset-0 w-full flex flex-col`}
    >
      <Header onBack={onBack} title={tripTitle} />

      {/* Content section */}
      <div className="flex-1 overflow-auto">
        <div
          className={`${layout.maxWidth.lg} mx-auto px-4 md:px-6 lg:px-8 py-6`}
        >
          <div className="w-full bg-light-base/30 dark:bg-dark-base/30 rounded-2xl p-6 md:p-8 lg:p-10">
            {isLoading ? (
              <LoadingSkeleton />
            ) : error ? (
              <div className="text-red-500 dark:text-red-400">
                <h3 className="text-xl font-bold mb-2">
                  Error Generating Itinerary
                </h3>
                <p>{error.message}</p>
                {error.code && (
                  <p className="text-sm mt-1 text-red-400 dark:text-red-300">
                    Error code: {error.code}
                  </p>
                )}
              </div>
            ) : (
              itinerary && <ItineraryContent content={itinerary} />
            )}
          </div>
        </div>
      </div>
    </TransitionContainer>
  );
}
