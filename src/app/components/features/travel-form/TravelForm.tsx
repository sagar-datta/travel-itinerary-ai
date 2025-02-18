"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { TransitionContainer } from "../../common/TransitionContainer";
import { Card } from "../../common/Card";
import { CityInput } from "../../common/CityInput";
import { Input } from "../../common/Input";
import { BlackButton } from "../../common/BlackButton";
import { BudgetSelector, type BudgetTier } from "../../common/BudgetSelector";
import { layout, delays } from "../../../styles/common";
import { generateItinerary } from "../../../services/gemini";

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
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
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
      } catch (e) {
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
      type="slide"
      className={`w-full ${layout.maxWidth.lg} ${layout.container.centered} px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 z-10`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-8 lg:space-y-12 w-full"
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
                onChange={(value) => setValue("days", value)}
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
                onChange={(value) => setValue("people", value)}
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
                onChange={(value) => setValue("interests", value)}
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
                onChange={(value) => setValue("budget", value)}
              />
            </Card>
          </TransitionContainer>
        </div>

        <TransitionContainer show={isStarted} delay={delays.delay600}>
          <div className="flex justify-center">
            <BlackButton type="submit" className="w-full lg:w-auto max-w-md">
              Generate Itinerary
            </BlackButton>
          </div>
        </TransitionContainer>
      </form>
    </TransitionContainer>
  );
}
