import create from 'zustand';
import { setCookie, parseCookies } from 'nookies';
import { useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeStore {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  themeMode: 'light',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      setCookie(null, 'themeMode', newTheme, { path: '/' });
      return { themeMode: newTheme };
    }),
}));

export const useTheme = () => {
  const { themeMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const cookies = parseCookies();
    const savedTheme = (cookies.themeMode as ThemeMode) || 'light';
    if (savedTheme !== themeMode) {
      toggleTheme();
    }
  }, [themeMode, toggleTheme]);

  return {
    themeMode,
    toggleTheme,
  };
};
