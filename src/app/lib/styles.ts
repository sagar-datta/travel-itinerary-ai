export const transitions = {
  base: "transition-all duration-300 ease-out",
  fast: "transition-all duration-300",
  slow: "transition-all duration-500",
} as const;

export const animations = {
  fadeIn: "opacity-100 transform-none",
  fadeOut: "opacity-0 translate-y-4",
  slideIn: "transform-none opacity-100",
  slideOut: "-translate-x-full opacity-0",
} as const;

export const delays = {
  none: "",
  delay100: "delay-[50ms]",
  delay200: "delay-[100ms]",
  delay300: "delay-[150ms]",
  delay400: "delay-[200ms]",
  delay500: "delay-[250ms]",
  delay600: "delay-[300ms]",
} as const;

export const typography = {
  gradientText: `
    bg-gradient-to-r 
    dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary 
    from-light-accent-primary via-light-text-primary to-light-accent-secondary 
    bg-clip-text text-transparent
  `,
  h1: "text-7xl font-black tracking-tight",
  h2: "text-3xl font-black tracking-tight",
  body: "text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary",
} as const;

export const layout = {
  maxWidth: {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  },
  padding: {
    page: "px-4 py-8",
    section: "p-6",
    header: "px-6",
  },
  container: {
    centered: "mx-auto flex items-center justify-center",
  },
  grid: {
    threeColumns:
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12",
  },
} as const;

export const shape = {
  borderRadius: "rounded-xl",
} as const;

// Common conditional class patterns
export const getTransitionClasses = (show: boolean, type: "fade" | "slide") => {
  if (type === "fade") {
    return show ? animations.fadeIn : animations.fadeOut;
  }
  return show ? animations.slideIn : animations.slideOut;
};
