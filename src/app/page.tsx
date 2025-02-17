'use client';
import { useState } from 'react';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';

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