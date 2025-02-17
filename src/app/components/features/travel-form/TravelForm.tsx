'use client';

import { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

export function TravelForm() {
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
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative rounded-2xl p-8
          dark:bg-dark-base bg-light-base
          shadow-[16px_16px_32px_#D0D0D0,-16px_-16px_32px_#FFFFFF] 
          dark:shadow-[16px_16px_32px_#222222,-16px_-16px_32px_#444444]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center
            dark:text-dark-text-primary text-light-text-primary">
            Plan Your Journey
          </h2>
          
          <div className="space-y-4">
            <Input
              label="Destination"
              placeholder="Where do you want to go?"
              value={formData.destination}
              onChange={(value) => setFormData({ ...formData, destination: value })}
            />

            <Input
              label="Start Date"
              type="date"
              value={formData.startDate}
              onChange={(value) => setFormData({ ...formData, startDate: value })}
            />

            <Input
              label="Duration (days)"
              type="number"
              placeholder="How long will you stay?"
              value={formData.duration}
              onChange={(value) => setFormData({ ...formData, duration: value })}
            />

            <Input
              label="Number of Travelers"
              type="number"
              placeholder="How many people?"
              value={formData.travelers}
              onChange={(value) => setFormData({ ...formData, travelers: value })}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              className="px-8 py-4 text-lg font-medium"
            >
              Create Itinerary
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}