// /components/providers/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.classList.add("theme-transition");
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    setTimeout(() => document.body.classList.remove("theme-transition"), 300);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Add this CSS somewhere in your global styles
// .theme-transition {
//   transition: background-color 0.3s, color 0.3s;
// }
