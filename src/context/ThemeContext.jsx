
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = "movie_explorer_theme";

const getInitialTheme = () => {
  // Check saved theme
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  // Check system preference
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (prefersDark) {
    return "dark";
  }

  // Default theme
  return "dark";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme to HTML element
    root.classList.toggle("dark", theme === "dark");

    // Save preference
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const isDark = theme === "dark";

  const contextValue = {
    theme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

