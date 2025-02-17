'use client';
import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Welcome } from './components/features/welcome/Welcome';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="min-h-screen grid grid-rows-[80px_1fr] dark:bg-dark-base bg-light-base">
      <Header 
        isStarted={isStarted}
        onTitleClick={() => setIsStarted(false)}
      />

      <main className="relative flex items-center justify-center px-4">
        <Welcome 
          isStarted={isStarted}
          onBegin={() => setIsStarted(true)}
        />
      </main>
    </div>
  );
}

/**
 * Component Structure Explanation:
 * 
 * src/app/components/
 * ├── common/             # Reusable components used across the app
 * │   └── ThemeToggle    # UI components, buttons, inputs, etc.
 * │
 * ├── layout/            # Structural components that define the app's layout
 * │   └── Header         # Header, footer, sidebar, etc.
 * │
 * ├── features/          # Feature-specific components grouped by feature
 * │   └── welcome/       # Components related to the welcome feature
 * │       └── Welcome    # Can include sub-components, hooks, utils specific to feature
 * │
 * └── [future folders]   # As app grows, can add:
 *     ├── hooks/         # Custom React hooks
 *     ├── utils/         # Utility functions and helpers
 *     ├── types/         # TypeScript type definitions
 *     └── context/       # React context providers
 */