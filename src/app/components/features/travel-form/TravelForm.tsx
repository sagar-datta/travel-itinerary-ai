"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { TransitionContainer } from "../../common/TransitionContainer";
import { Card } from "../../common/Card";
import { CityInput } from "../../common/CityInput";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { layout } from "../../../styles/common";

interface TravelFormProps {
  isStarted: boolean;
}

interface FormData {
  destination: string;
  destinationLabel?: string;
  days: string;
  people: string;
}

const STORAGE_KEY = "travel-form-data";

export function TravelForm({ isStarted }: TravelFormProps) {
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      destination: "",
      destinationLabel: "",
      days: "1",
      people: "1",
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

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const destination = watch("destination");
  const destinationLabel = watch("destinationLabel");

  return (
    <TransitionContainer
      show={isStarted}
      className={`w-full ${layout.maxWidth.lg} ${layout.container.centered} px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-8 lg:space-y-12 w-full"
      >
        <div className={layout.grid.threeColumns}>
          <TransitionContainer show={isStarted} delay="delay-125">
            <Card>
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

          <TransitionContainer show={isStarted} delay="delay-150">
            <Card>
              <Input
                label="Days"
                type="number"
                numberType="nights"
                value={watch("days")}
                onChange={(value) => setValue("days", value)}
              />
            </Card>
          </TransitionContainer>

          <TransitionContainer show={isStarted} delay="delay-175">
            <Card>
              <Input
                label="People"
                type="number"
                numberType="people"
                value={watch("people")}
                onChange={(value) => setValue("people", value)}
              />
            </Card>
          </TransitionContainer>
        </div>

        <TransitionContainer show={isStarted} delay="delay-200">
          <div className="flex justify-center">
            <Button type="submit" className="w-full max-w-md">
              Generate Itinerary
            </Button>
          </div>
        </TransitionContainer>
      </form>
    </TransitionContainer>
  );
}
