'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { shape } from '../../styles/common';
import axios from 'axios';
import type { ActionMeta, StylesConfig } from 'react-select';

// Dynamically import AsyncSelect with no SSR
const AsyncSelect = dynamic(
  () => import('react-select/async').then(mod => mod.default),
  { ssr: false }
) as any;

interface CityOption {
  value: string;
  label: string;
}

interface CityInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

interface NoOptionsMessageProps {
  inputValue: string;
}

interface GeonamesResult {
  toponymName: string;
  name: string;
  adminName1: string;
  countryName: string;
  population: number;
}

const USERNAME = 'sagardatta'; // Geonames username

export function CityInput({ label, value, onChange, className = '' }: CityInputProps) {
  const [selectedOption, setSelectedOption] = useState<CityOption | null>(
    value ? { value, label: value } : null
  );

  const loadOptions = async (inputValue: string) => {
    if (inputValue.length < 2) return [];

    try {
      // Get both exact matches and popular cities
      const [exactMatches, similarMatches] = await Promise.all([
        // Exact matches first
        axios.get('http://api.geonames.org/searchJSON', {
          params: {
            name_equals: inputValue,
            maxRows: 3,
            username: USERNAME,
            featureClass: 'P',
            orderby: 'population'
          }
        }),
        // Then similar matches
        axios.get('http://api.geonames.org/searchJSON', {
          params: {
            name_startsWith: inputValue,
            maxRows: 10,
            username: USERNAME,
            featureClass: 'P',
            orderby: 'population'
          }
        })
      ]);

      // Combine and deduplicate results
      const allResults = [
        ...(exactMatches.data?.geonames || []),
        ...(similarMatches.data?.geonames || [])
      ];

      // Remove duplicates and sort by population
      const uniqueResults = Array.from(
        new Map(allResults.map(item => [item.name + item.adminName1 + item.countryName, item]))
        .values()
      ).sort((a, b) => (b.population || 0) - (a.population || 0));

      // Take top 5 results
      return uniqueResults
        .slice(0, 5)
        .filter((place: GeonamesResult) => 
          place.name && 
          place.adminName1 && 
          place.countryName
        )
        .map((place: GeonamesResult) => {
          const locationString = `${place.name}, ${place.adminName1}, ${place.countryName}`;
          return {
            value: locationString,
            label: locationString
          };
        });
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  };

  const handleChange = (
    newValue: CityOption | null,
    actionMeta: ActionMeta<CityOption>
  ) => {
    setSelectedOption(newValue);
    onChange(newValue?.value || '');
  };

  const customStyles: StylesConfig<CityOption, false> = {
    control: (base) => ({
      ...base,
      minHeight: '56px',
      borderRadius: shape.borderRadius.replace('rounded-', ''),
      border: 'none',
      backgroundColor: 'var(--background-base-50)',
      boxShadow: 'var(--shadow-pressed)',
      '&:hover': {
        border: 'none',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: 'var(--background-base)',
      borderRadius: shape.borderRadius.replace('rounded-', ''),
      overflow: 'hidden',
      zIndex: 10,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused 
        ? 'var(--accent-primary)' 
        : 'var(--background-base)',
      color: state.isFocused 
        ? 'white' 
        : 'var(--text-primary)',
      cursor: 'pointer',
      padding: '8px 12px',
      fontSize: '0.95rem',
      '&:active': {
        backgroundColor: 'var(--accent-secondary)',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: 'var(--text-primary)',
    }),
    input: (base) => ({
      ...base,
      color: 'var(--text-primary)',
    }),
    placeholder: (base) => ({
      ...base,
      color: 'var(--text-primary)',
      opacity: 0.5,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        className="text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent"
      >
        {label}
      </label>
      <div className="min-h-[56px]">
        <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedOption}
          onChange={handleChange}
          loadOptions={loadOptions}
          className={className}
          styles={customStyles}
          placeholder="Start typing a city name..."
          noOptionsMessage={({ inputValue }: NoOptionsMessageProps) => 
            inputValue.length < 2 
              ? "Type at least 2 characters to search..." 
              : "No cities found"
          }
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null
          }}
          menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
        />
      </div>
    </div>
  );
}