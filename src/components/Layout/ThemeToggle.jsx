import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../theme/ThemeProvider';

const ThemeToggle = () => {
  const { themeId, toggleTheme } = useTheme();
  const isNeon = themeId === 'neon-butter';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="focus-ring relative inline-flex items-center justify-between gap-1 rounded-full border border-outline bg-[color:var(--color-surface)] px-2 py-1 text-sm font-semibold text-text shadow-card backdrop-blur"
    >
      <motion.span
        layout
        className="absolute inset-0 m-1 rounded-full bg-white/10"
        style={{ left: isNeon ? 2 : '50%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <span className="relative inline-flex items-center gap-1 px-2">
        <Sun size={14} className="text-amber-300" />
        <span className="hidden sm:inline">Neon</span>
      </span>
      <span className="relative inline-flex items-center gap-1 px-2">
        <Moon size={14} className="text-sky-200" />
        <span className="hidden sm:inline">Candy</span>
      </span>
    </button>
  );
};

export default ThemeToggle;
