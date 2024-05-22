import create from 'zustand';
import { setCookie, parseCookies } from 'nookies';
import { useEffect } from 'react';
import { ThemeMode, useThemeStore } from '@tech/context/theme';



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
