'use client';

import { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import { TransitionContainer } from '../../common/TransitionContainer';
import { layout } from '../../../styles/common';

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
    <TransitionContainer 
      show={isStarted}
      className={`w-full ${layout.maxWidth.lg} ${layout.container.centered} px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8`}
    >
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 lg:space-y-12 w-full">
        {/* Grid for form inputs */}
        <div className={layout.grid.threeColumns}>
          {/* First column - Destination */}
          <TransitionContainer 
            show={isStarted}
            delay="delay-125"
          >
            <Card>
              <Input
                label="Destination"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={setDestination}
              />
            </Card>
          </TransitionContainer>

          {/* Second column - Empty card for now */}
          <TransitionContainer 
            show={isStarted}
            delay="delay-150"
          >
            <Card className="min-h-[120px]">&nbsp;</Card>
          </TransitionContainer>

          {/* Third column - Empty card for now */}
          <TransitionContainer 
            show={isStarted}
            delay="delay-175"
          >
            <Card className="min-h-[120px]">&nbsp;</Card>
          </TransitionContainer>
        </div>

        {/* Full-width section for submit button */}
        <TransitionContainer 
          show={isStarted}
          delay="delay-200"
          className="flex justify-center"
        >
          <Button
            type="submit"
            className="px-6 md:px-8 lg:px-12 py-3 md:py-3 lg:py-4 text-base md:text-base lg:text-lg font-medium w-full md:w-auto"
          >
            Create Itinerary
          </Button>
        </TransitionContainer>
      </form>
    </TransitionContainer>
  );
}