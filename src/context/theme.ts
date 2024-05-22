import { setCookie } from "nookies";
import { create } from "zustand";

export type ThemeMode = 'light' | 'dark';

export interface ThemeStore {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  themeMode: 'light',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      setCookie(null, 'themeMode', newTheme, { path: '/' });
      return { themeMode: newTheme };
    }),
}));