import { create } from 'zustand';
interface ThemeStore {
  themeMode: 'light' | 'dark';
  toggleTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  themeMode: 'light',
  toggleTheme: (theme) =>
    set(() => ({
      themeMode: theme,
    }))
}));
