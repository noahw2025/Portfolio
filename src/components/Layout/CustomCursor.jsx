import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [variant, setVariant] = useState('default');
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || hasCoarsePointer) {
      setEnabled(false);
      return;
    }

    const move = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  useEffect(() => {
    if (!enabled) return undefined;
    const interactiveSelectors = 'a, button, [data-cursor="interactive"]';
    const enter = () => setVariant('interactive');
    const leave = () => setVariant('default');
    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener('pointerenter', enter);
      el.addEventListener('pointerleave', leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('pointerenter', enter);
        el.removeEventListener('pointerleave', leave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  const springConfig = { stiffness: 400, damping: 28, mass: 0.6 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  const variants = {
    default: {
      scale: 1,
      background: 'color-mix(in srgb, var(--color-primary, #ffd500) 28%, transparent)',
      border: '1px solid var(--color-outline, rgba(255,255,255,0.15))',
    },
    interactive: {
      scale: 1.35,
      background: 'color-mix(in srgb, var(--color-secondary, #22d3ee) 45%, transparent)',
      border: '1px solid color-mix(in srgb, var(--color-secondary, #22d3ee) 65%, transparent)',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 rounded-full backdrop-blur md:block"
      style={{ translateX: cursorX, translateY: cursorY }}
      variants={variants}
      animate={variant}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      aria-hidden
    />
  );
};

export default CustomCursor;
