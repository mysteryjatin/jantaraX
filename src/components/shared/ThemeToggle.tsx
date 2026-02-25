"use client";

import * as React from "react";
import { Moon, Sun, Clock } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check if user has manually set theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== "system") {
      setIsAutoMode(false);
    }
  }, []);

  const handleToggle = () => {
    if (isAutoMode) {
      // Switch to manual mode
      setIsAutoMode(false);
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      // Switch back to auto mode
      setIsAutoMode(true);
      setTheme("system");
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" suppressHydrationWarning>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      title={isAutoMode ? "Auto theme (time-based)" : "Manual theme"}
      suppressHydrationWarning
    >
      {isAutoMode ? (
        <Clock className="h-[1.2rem] w-[1.2rem] text-primary" />
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </>
      )}
      <span className="sr-only">
        {isAutoMode ? "Auto theme (time-based)" : "Toggle theme"}
      </span>
    </Button>
  );
}
