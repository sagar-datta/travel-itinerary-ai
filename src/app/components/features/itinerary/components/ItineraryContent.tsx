interface ItineraryContentProps {
  content: string;
}

export function ItineraryContent({ content }: ItineraryContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.split("\n").map((line, i) => (
        <p key={i} className="mb-4">
          {line}
        </p>
      ))}
    </div>
  );
}
