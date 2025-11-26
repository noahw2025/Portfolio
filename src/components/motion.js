export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: 'easeOut' } },
});

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const popCard = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.38, delay, ease: 'easeOut' } },
});
