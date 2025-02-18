export interface FormData {
  destination: string;
  destinationLabel?: string;
  days: string;
  people: string;
}

export interface ItineraryDisplayProps {
  isVisible: boolean;
  isLoading: boolean;
  itinerary: string | null;
  onBack: () => void;
  formData: FormData;
}

export interface HeaderProps {
  onBack: () => void;
  title: string;
}

export interface ItineraryContentProps {
  content: string;
}

export interface LoadingSkeletonProps {
  className?: string;
}
