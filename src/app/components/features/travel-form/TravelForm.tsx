"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { TransitionContainer } from "@/app/components/common/TransitionContainer";
import { Card } from "@/app/components/common/Card";
import {
  Input,
  CityInput,
  BudgetSelector,
  type BudgetTier,
} from "@/app/components/common/form";
import { BlackButton } from "@/app/components/common/buttons";
import { layout, delays } from "@/app/lib/styles";
import { generateItinerary } from "@/app/services/ai/gemini";

interface TravelFormProps {
  isStarted: boolean;
  onGenerate: (
    response: Promise<string>,
    formData: {
      destination: string;
      destinationLabel?: string;
      days: string;
      people: string;
    }
  ) => void;
}

interface FormData {
  destination: string;
  destinationLabel?: string;
  days: string;
  people: string;
  interests: string;
  budget: BudgetTier;
}

const STORAGE_KEY = "travel-form-data";

export function TravelForm({ isStarted, onGenerate }: TravelFormProps) {
  const { handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      destination: "",
      destinationLabel: "",
      days: "1",
      people: "1",
      interests: "",
      budget: "$",
    },
  });

  // Load initial values from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as Partial<FormData>;
        Object.entries(parsedData).forEach(([key, value]) => {
          if (typeof value === "string") {
            setValue(key as keyof FormData, value);
          }
        });
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, [setValue]);

  // Save form values to localStorage whenever they change
  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: FormData) => {
    try {
      // Create the promise but don't await it
      const responsePromise = generateItinerary({
        destination: data.destinationLabel || data.destination,
        days: data.days,
        people: data.people,
        interests: data.interests,
        budget: data.budget,
      });

      // Pass both the promise and form data to parent
      onGenerate(responsePromise, {
        destination: data.destination,
        destinationLabel: data.destinationLabel,
        days: data.days,
        people: data.people,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const destination = watch("destination");
  const destinationLabel = watch("destinationLabel");

  return (
    <TransitionContainer
      show={isStarted}
      type="fade"
      className={`w-full ${layout.maxWidth.lg} ${layout.container.centered} px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 z-10`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-8 lg:space-y-12 w-full pb-24 md:pb-0"
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 [&>*]:h-full lg:[&>*:last-child:nth-child(3n-2)]:col-start-2 lg:[&>*:nth-last-child(2):nth-child(3n-2)]:col-start-1`}
        >
          <TransitionContainer
            show={isStarted}
            delay={delays.delay100}
            className="h-full"
          >
            <Card className="h-full">
              <CityInput
                label="Destination"
                value={destination}
                initialLabel={destinationLabel}
                onChange={(value, label) => {
                  setValue("destination", value);
                  setValue("destinationLabel", label || "");
                }}
              />
            </Card>
          </TransitionContainer>

          <TransitionContainer
            show={isStarted}
            delay={delays.delay200}
            className="h-full"
          >
            <Card className="h-full">
              <Input
                label="Days"
                type="number"
                numberType="nights"
                value={watch("days")}
                onChange={(value: string) => setValue("days", value)}
              />
            </Card>
          </TransitionContainer>

          <TransitionContainer
            show={isStarted}
            delay={delays.delay300}
            className="h-full"
          >
            <Card className="h-full">
              <Input
                label="People"
                type="number"
                numberType="people"
                value={watch("people")}
                onChange={(value: string) => setValue("people", value)}
              />
            </Card>
          </TransitionContainer>

          <TransitionContainer
            show={isStarted}
            delay={delays.delay400}
            className="h-full"
          >
            <Card className="h-full">
              <Input
                label="Interests"
                type="text"
                placeholder="museums, hiking, local food, art galleries"
                value={watch("interests")}
                onChange={(value: string) => setValue("interests", value)}
              />
            </Card>
          </TransitionContainer>

          <TransitionContainer
            show={isStarted}
            delay={delays.delay500}
            className="h-full"
          >
            <Card className="h-full">
              <BudgetSelector
                label="Budget"
                value={watch("budget") as BudgetTier}
                onChange={(value: BudgetTier) => setValue("budget", value)}
              />
            </Card>
          </TransitionContainer>
        </div>

        <TransitionContainer 
          show={isStarted} 
          delay={delays.delay600}
          className="fixed md:relative left-0 right-0 bottom-0 px-4 py-4 md:px-0 md:py-0 backdrop-blur-md bg-white/30 md:bg-transparent md:backdrop-blur-none shadow-lg md:shadow-none"
        >
          <div className="flex justify-center">
            <BlackButton 
              type="submit" 
              className="w-full lg:w-auto max-w-md"
              disabled={!destination.trim()}
            >
              Generate Itinerary
            </BlackButton>
          </div>
        </TransitionContainer>
      </form>
    </TransitionContainer>
  );
}
