import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Theme = 'dark' | 'light' | 'system';

export interface ThemeContextValue {
  /** The active resolved theme ('dark' or 'light') */
  theme: 'dark' | 'light';
  /** The raw setting including 'system' */
  themeSetting: Theme;
  /** Switch theme */
  setTheme: (theme: Theme) => void;
  /** Toggle between dark/light */
  toggleTheme: () => void;
  /** Override the accent color at runtime */
  setAccentColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(setting: Theme): 'dark' | 'light' {
  if (setting === 'system') return getSystemTheme();
  return setting;
}

export interface ThemeProviderProps {
  /** Initial theme setting. Defaults to 'dark'. */
  defaultTheme?: Theme;
  /** Accent color CSS value (e.g. '#6366f1' or 'hsl(239, 84%, 67%)'). */
  accentColor?: string;
  /** Target element to apply data-theme attribute. Defaults to documentElement. */
  children: React.ReactNode;
}

export function ThemeProvider({
  defaultTheme = 'dark',
  accentColor,
  children,
}: ThemeProviderProps) {
  const [themeSetting, setThemeSetting] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() =>
    resolveTheme(defaultTheme),
  );

  // Sync with defaultTheme prop changes
  useEffect(() => {
    setThemeSetting(defaultTheme);
  }, [defaultTheme]);

  // Resolve theme whenever setting changes
  useEffect(() => {
    const resolved = resolveTheme(themeSetting);
    setResolvedTheme(resolved);

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolved);
    }
  }, [themeSetting]);

  // Listen for system theme changes when in 'system' mode
  useEffect(() => {
    if (themeSetting !== 'system' || typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const resolved = resolveTheme('system');
      setResolvedTheme(resolved);
      document.documentElement.setAttribute('data-theme', resolved);
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [themeSetting]);

  // Apply accent color override
  useEffect(() => {
    if (!accentColor || typeof document === 'undefined') return;
    document.documentElement.style.setProperty('--ruy-accent', accentColor);
    return () => {
      document.documentElement.style.removeProperty('--ruy-accent');
    };
  }, [accentColor]);

  const setTheme = useCallback((theme: Theme) => {
    setThemeSetting(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeSetting((prev) => {
      const current = resolveTheme(prev);
      return current === 'dark' ? 'light' : 'dark';
    });
  }, []);

  const setAccentColor = useCallback((color: string) => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--ruy-accent', color);
    }
  }, []);

  const value: ThemeContextValue = {
    theme: resolvedTheme,
    themeSetting,
    setTheme,
    toggleTheme,
    setAccentColor,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
