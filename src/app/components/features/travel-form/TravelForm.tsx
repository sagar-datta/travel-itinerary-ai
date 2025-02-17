'use client';

import { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';

interface TravelFormProps {
  isStarted: boolean;
}

export function TravelForm({ isStarted }: TravelFormProps) {
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', { destination });
  };

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 transition-all duration-200 ease-out transform
      ${isStarted ? 'opacity-100 translate-y-0 z-10 delay-75' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}
    >
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Grid for form inputs */}
        <div className="grid grid-cols-3 gap-12">
          {/* First column - Destination */}
          <div className={`transition-all duration-200 ease-out delay-125
            ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Card>
              <Input
                label="Destination"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={setDestination}
              />
            </Card>
          </div>

          {/* Second column - Empty card for now */}
          <div className={`transition-all duration-200 ease-out delay-150
            ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Card className="min-h-[120px]">&nbsp;</Card>
          </div>

          {/* Third column - Empty card for now */}
          <div className={`transition-all duration-200 ease-out delay-175
            ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Card className="min-h-[120px]">&nbsp;</Card>
          </div>
        </div>

        {/* Full-width section for submit button */}
        <div className={`flex justify-center transition-all duration-200 ease-out delay-200
          ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
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