/**
 * Optimized scroll animation configuration for smooth performance
 * Reduces lag on mobile and desktop by triggering animations earlier
 * and using faster, more efficient transitions
 */

export const optimizedRevealVariants = {
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2, // Reduced from 0.3+ for faster reveals
      delay: Math.min(i * 0.01, 0.05), // Minimal delay, capped
      ease: [0.25, 0.1, 0.25, 1], // Optimized easing
    },
  }),
  hidden: {
    y: 10, // Reduced from 20 for less movement
    opacity: 0,
  },
};

/**
 * Optimized viewport settings for fast scroll detection
 * Triggers animations earlier (before element fully in view)
 */
export const optimizedViewport = {
  once: true,
  amount: 0.05, // Trigger when just 5% visible (instead of 10%)
  margin: "0px 0px 50px 0px", // Positive margin - triggers 50px BEFORE element enters viewport
};

/**
 * For elements that should appear instantly when scrolling fast
 */
export const instantViewport = {
  once: true,
  amount: 0,
  margin: "0px 0px 200px 0px", // Triggers 200px before entering viewport
};

