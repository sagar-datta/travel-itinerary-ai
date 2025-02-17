export const transitions = {
  base: 'transition-all duration-300 ease-out',
  fast: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-500 ease-out',
} as const;

export const animations = {
  fadeIn: 'opacity-100 transform-none',
  fadeOut: 'opacity-0 translate-y-4',
  slideIn: 'transform-none opacity-100',
  slideOut: '-translate-x-full opacity-0',
} as const;

export const typography = {
  gradientText: `
    bg-gradient-to-r 
    dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary 
    from-light-accent-primary via-light-text-primary to-light-accent-secondary 
    bg-clip-text text-transparent
  `,
  h1: 'text-7xl font-black tracking-tight',
  h2: 'text-3xl font-black tracking-tight',
  body: 'text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary',
} as const;

export const layout = {
  maxWidth: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
  padding: {
    page: 'px-4 py-8',
    section: 'p-6',
    header: 'px-6',
  },
  container: {
    centered: 'mx-auto flex items-center justify-center',
  },
  grid: {
    threeColumns: 'grid grid-cols-3 gap-12',
  },
} as const;

// Common conditional class patterns
export const getTransitionClasses = (isActive: boolean, type: 'fade' | 'slide' = 'fade') => {
  if (type === 'fade') {
    return isActive ? animations.fadeIn : animations.fadeOut;
  }
  return isActive ? animations.slideIn : animations.slideOut;
};