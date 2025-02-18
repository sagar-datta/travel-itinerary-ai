import { TransitionContainer } from "../../common/TransitionContainer";
import { typography, layout } from "../../../styles/common";
import { Header } from "./components/Header";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ItineraryContent } from "./components/ItineraryContent";

interface ItineraryDisplayProps {
  isVisible: boolean;
  isLoading: boolean;
  itinerary: string | null;
  onBack: () => void;
  formData: {
    destination: string;
    destinationLabel?: string;
    days: string;
    people: string;
  };
}

export function ItineraryDisplay({
  isVisible,
  isLoading,
  itinerary,
  onBack,
  formData,
}: ItineraryDisplayProps) {
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
      type="slide"
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
            ) : (
              itinerary && <ItineraryContent content={itinerary} />
            )}
          </div>
        </div>
      </div>
    </TransitionContainer>
  );
}
