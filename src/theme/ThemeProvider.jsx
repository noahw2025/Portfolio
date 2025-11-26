import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { applyTheme, defaultThemeId, themes } from './theme';

const ThemeContext = createContext({
  themeId: defaultThemeId,
  theme: themes[defaultThemeId],
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [themeId, setThemeId] = useState(() => {
    const stored = localStorage.getItem('nw-theme');
    if (stored && themes[stored]) return stored;
    return prefersDark ? 'neon-butter' : defaultThemeId;
  });

  useEffect(() => {
    const next = themes[themeId] || themes[defaultThemeId];
    applyTheme(next);
    document.body.dataset.theme = next.id;
    localStorage.setItem('nw-theme', next.id);
  }, [themeId]);

  const value = useMemo(
    () => ({
      themeId,
      theme: themes[themeId] || themes[defaultThemeId],
      toggleTheme: () => setThemeId((prev) => (prev === 'neon-butter' ? 'candy-comic' : 'neon-butter')),
      setTheme: setThemeId,
    }),
    [themeId],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
