'use client';

import { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import { TransitionContainer } from '../../common/TransitionContainer';
import { layout } from '../../../styles/common';
import { CityInput } from '../../common/CityInput';

interface TravelFormProps {
  isStarted: boolean;
}

export function TravelForm({ isStarted }: TravelFormProps) {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [people, setPeople] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', { destination, days, people });
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
              <CityInput
                label="Destination"
                value={destination}
                onChange={setDestination}
              />
            </Card>
          </TransitionContainer>

          {/* Second column - Days */}
          <TransitionContainer
            show={isStarted}
            delay="delay-150"
          >
            <Card>
              <Input
                label="Days"
                type="number"
                min="1"
                placeholder="How many days?"
                value={days}
                onChange={setDays}
              />
            </Card>
          </TransitionContainer>

          {/* Third column - People */}
          <TransitionContainer
            show={isStarted}
            delay="delay-175"
          >
            <Card>
              <Input
                label="People"
                type="number"
                min="1"
                placeholder="How many people?"
                value={people}
                onChange={setPeople}
              />
            </Card>
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
            size="lg"
            fullWidth
            className="max-w-sm md:w-auto"
          >
            Create Itinerary
          </Button>
        </TransitionContainer>
      </form>
    </TransitionContainer>
  );
}