import { createContext, useState, useCallback } from "react";

export interface ThemeContext {
  themeColor: THEME_TYPE;
  updateTheme: (color: string) => void;
}

export const THEME_DEFAULT_VALUE = {
  themeColor: "light",
  updateTheme: () => {},
};

export const themeContext = createContext<ThemeContext>(THEME_DEFAULT_VALUE);

export const useTheme = (): ThemeContext => {
  const [themeColor, setThemeColor] = useState<string>(
    THEME_DEFAULT_VALUE.themeColor
  );

  const updateTheme = useCallback((color: string): void => {
    setThemeColor(color);
  }, []);

  return { themeColor, updateTheme };
};
