interface DaySkeletonProps {
  dayIndex: number;
}

function DaySkeleton({ dayIndex }: DaySkeletonProps) {
  return (
    <div key={dayIndex} className="space-y-4">
      {/* Day Header */}
      <div className="h-6 bg-light-accent-primary/40 dark:bg-dark-accent-primary/40 rounded-xl w-32 mb-6 animate-pulse" />

      {/* Morning */}
      <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
        <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-5/6 animate-pulse" />
      </div>

      {/* Afternoon */}
      <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
        <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-4/6 animate-pulse" />
      </div>

      {/* Evening */}
      <div className="space-y-3 pl-4 border-l-2 border-light-accent-primary/20 dark:border-dark-accent-primary/20">
        <div className="h-5 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-24 animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-full animate-pulse" />
        <div className="h-4 bg-light-accent-primary/25 dark:bg-dark-accent-primary/25 rounded-xl w-3/4 animate-pulse" />
      </div>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="space-y-4">
        <div className="h-8 bg-light-accent-primary/30 dark:bg-dark-accent-primary/30 rounded-xl w-3/4 animate-pulse" />
        <div className="h-4 bg-light-accent-primary/20 dark:bg-dark-accent-primary/20 rounded-xl w-1/2 animate-pulse" />
      </div>

      {/* Days */}
      {[...Array(3)].map((_, index) => (
        <DaySkeleton key={index} dayIndex={index} />
      ))}
    </div>
  );
}
