'use client';

import { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

interface TravelFormProps {
  isStarted: boolean;
}

export function TravelForm({ isStarted }: TravelFormProps) {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    duration: '',
    travelers: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto transition-all duration-200 ease-out transform
      ${isStarted ? 'opacity-100 translate-y-0 z-10 delay-75' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}
    >
      <form onSubmit={handleSubmit} className="p-8 space-y-8 rounded-3xl
        dark:bg-dark-base bg-light-base
        dark:shadow-[12px_12px_24px_#1A1A1A,-12px_-12px_24px_#333333] 
        shadow-[12px_12px_24px_#D0D0D0,-12px_-12px_24px_#FFFFFF]
        hover:dark:shadow-[16px_16px_32px_#1A1A1A,-16px_-16px_32px_#333333] 
        hover:shadow-[16px_16px_32px_#D0D0D0,-16px_-16px_32px_#FFFFFF]
        transition-shadow duration-300"
      >
        <div className={`transition-all duration-200 ease-out delay-125
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Input
            label="Destination"
            placeholder="Where do you want to go?"
            value={formData.destination}
            onChange={(value) => setFormData({ ...formData, destination: value })}
          />
        </div>

        <div className={`transition-all duration-200 ease-out delay-150
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Input
            label="Start Date"
            type="date"
            value={formData.startDate}
            onChange={(value) => setFormData({ ...formData, startDate: value })}
          />
        </div>

        <div className={`transition-all duration-200 ease-out delay-175
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Input
            label="Duration (days)"
            type="number"
            placeholder="How long will you stay?"
            value={formData.duration}
            onChange={(value) => setFormData({ ...formData, duration: value })}
          />
        </div>

        <div className={`transition-all duration-200 ease-out delay-200
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Input
            label="Number of Travelers"
            type="number"
            placeholder="How many people?"
            value={formData.travelers}
            onChange={(value) => setFormData({ ...formData, travelers: value })}
          />
        </div>

        <div className={`pt-8 flex justify-center transition-all duration-200 ease-out delay-225
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            type="submit"
            className="px-12 py-4 text-lg font-medium"
          >
            Create Itinerary
          </Button>
        </div>
      </form>
    </div>
  );
}