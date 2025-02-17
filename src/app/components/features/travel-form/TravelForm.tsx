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
      <h2 className="text-2xl font-semibold mb-12 text-center
        dark:text-dark-text-primary text-light-text-primary">
        Plan Your Journey
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
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

        <div className="pt-8 flex justify-center">
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