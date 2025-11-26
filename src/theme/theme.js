export const tokens = {
  spacing: [4, 8, 12, 16, 20, 24, 32, 40, 56, 72],
  radii: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    pill: '999px',
  },
  shadows: {
    soft: '0 12px 40px rgba(0, 0, 0, 0.15)',
    medium: '0 24px 60px rgba(0, 0, 0, 0.25)',
    strong: '0 40px 120px rgba(0, 0, 0, 0.35)',
  },
  transitions: {
    fast: '150ms ease',
    base: '240ms ease',
    slow: '420ms ease',
  },
  typography: {
    heading: 'Space Grotesk, Inter, system-ui, -apple-system, sans-serif',
    body: 'Inter, Space Grotesk, system-ui, -apple-system, sans-serif',
    scale: {
      h1: 'clamp(2.4rem, 4vw, 3.6rem)',
      h2: 'clamp(1.8rem, 3vw, 2.6rem)',
      h3: 'clamp(1.4rem, 2.5vw, 2rem)',
      h4: '1.2rem',
      body: '1rem',
      caption: '0.9rem',
    },
  },
};

export const themes = {
  'neon-butter': {
    id: 'neon-butter',
    name: 'Neon Butter',
    colors: {
      primary: '#ffd500',
      secondary: '#22d3ee',
      background: '#0b0b0f',
      surface: 'rgba(18, 21, 32, 0.82)',
      text: '#f8fafc',
      muted: '#cbd5e1',
      outline: 'rgba(255, 255, 255, 0.14)',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    gradients: {
      background:
        'linear-gradient(120deg, #0b0b0f 0%, #0f172a 45%, #0b0f1f 100%)',
      accent: 'linear-gradient(135deg, #ffd500 0%, #00f5ff 50%, #7c3aed 100%)',
      grid:
        'radial-gradient(circle at 15% 15%, rgba(255, 213, 0, 0.15), transparent 22%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.14), transparent 26%)',
    },
  },
  'candy-comic': {
    id: 'candy-comic',
    name: 'Candy Comic',
    colors: {
      primary: '#ff6db0',
      secondary: '#ffb347',
      background: '#1b0f24',
      surface: 'rgba(255, 255, 255, 0.08)',
      text: '#ffeef8',
      muted: '#f4cfe5',
      outline: 'rgba(255, 255, 255, 0.2)',
      success: '#4ade80',
      warning: '#f97316',
      error: '#ef4444',
    },
    gradients: {
      background:
        'linear-gradient(135deg, #1b0f24 0%, #2c0b36 45%, #1a0a2a 100%), radial-gradient(circle at 20% 20%, rgba(255, 109, 176, 0.12), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255, 179, 71, 0.16), transparent 26%)',
      accent: 'linear-gradient(120deg, #ff6db0 0%, #d66cff 40%, #ffb347 90%)',
      grid:
        'radial-gradient(circle at 15% 15%, rgba(255, 109, 176, 0.18), transparent 24%), radial-gradient(circle at 82% 0%, rgba(255, 179, 71, 0.15), transparent 26%)',
    },
  },
};

export const defaultThemeId = 'neon-butter';

export const applyTheme = (theme) => {
  if (!theme) return;
  const root = document.documentElement;
  const { colors, gradients } = theme;

  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-secondary', colors.secondary);
  root.style.setProperty('--color-background', colors.background);
  root.style.setProperty('--color-surface', colors.surface);
  root.style.setProperty('--color-text', colors.text);
  root.style.setProperty('--color-muted', colors.muted);
  root.style.setProperty('--color-outline', colors.outline);
  root.style.setProperty('--color-success', colors.success);
  root.style.setProperty('--color-warning', colors.warning);
  root.style.setProperty('--color-error', colors.error);

  root.style.setProperty('--gradient-background', gradients.background);
  root.style.setProperty('--gradient-accent', gradients.accent);
  root.style.setProperty('--gradient-grid', gradients.grid);

  root.style.setProperty('--font-heading', tokens.typography.heading);
  root.style.setProperty('--font-body', tokens.typography.body);
};
