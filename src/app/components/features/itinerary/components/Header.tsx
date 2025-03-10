import { BlackButton } from "@/app/components/common/buttons";
import { typography, layout } from "@/app/lib/styles";

interface HeaderProps {
  onBack: () => void;
  title: string;
}

export function Header({ onBack, title }: HeaderProps) {
  return (
    <div className="sticky top-0 z-10 w-full bg-light-base dark:bg-dark-base md:border-b dark:md:border-dark-base/50 md:border-light-base/50">
      <div
        className={`${layout.maxWidth.lg} mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center`}
      >
        <BlackButton
          onClick={onBack}
          className="!px-3 !py-1.5 !text-sm mr-4 !rounded-lg"
        >
          ← Back
        </BlackButton>
        <h1
          className={`${typography.gradientText} text-xl md:text-3xl lg:text-6xl font-black tracking-tight flex-1 text-center`}
        >
          {title}
        </h1>
        {/* Empty div to balance the back button */}
        <div className="w-[68px]" />
      </div>
    </div>
  );
}
