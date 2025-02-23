"use client";
import { Button, BlackButton } from "@/app/components/common/buttons";
import {
  transitions,
  typography,
  getTransitionClasses,
} from "@/app/lib/styles";

interface WelcomeProps {
  isStarted: boolean;
  onBegin: () => void;
}

export function Welcome({ isStarted, onBegin }: WelcomeProps) {
  return (
    <div
      className={`
      text-center transform 
      ${transitions.fast}
      ${
        isStarted
          ? "opacity-0 pointer-events-none scale-95 z-0"
          : "opacity-100 transform-none z-10"
      }
    `}
    >
      <h1 className={`${typography.h1} mb-6`}>
        <span className={typography.gradientText}>Itiner</span>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          ai
        </span>
      </h1>
      <p
        className={`
        ${typography.body} mb-12 
        ${transitions.fast}
        ${isStarted ? "opacity-0 scale-95" : "opacity-100 transform-none"}
      `}
      >
        Plan your perfect trip with AI assistance
      </p>

      <div className="flex justify-center">
        <BlackButton onClick={onBegin} className="max-w-md">
          Start Planning
        </BlackButton>
      </div>
    </div>
  );
}
