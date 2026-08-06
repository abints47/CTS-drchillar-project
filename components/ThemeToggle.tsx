"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial state from root HTML class or system preference/localStorage
    const root = document.documentElement;
    const initialDark = 
      root.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(initialDark);
    if (initialDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-white hover:bg-white/10 transition-colors rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-white" />
      ) : (
        <Moon className="h-4 w-4 text-white" />
      )}
    </Button>
  );
}