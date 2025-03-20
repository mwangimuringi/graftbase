import { useState, useEffect } from "react";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && Object.values(Theme).includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(Theme.Light, Theme.Dark);
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
