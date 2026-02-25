"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useThemeByTime = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateThemeByTime = () => {
      // Only update if theme is set to "system" (auto mode)
      if (theme !== "system") return;

      const now = new Date();
      const hour = now.getHours();
      
      // Switch to dark mode between 6 PM (18:00) and 6 AM (06:00)
      // Switch to light mode between 6 AM (06:00) and 6 PM (18:00)
      if (hour >= 18 || hour < 6) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // Set initial theme
    updateThemeByTime();

    // Update theme every minute to handle timezone changes
    const interval = setInterval(updateThemeByTime, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [mounted, theme, setTheme]);

  return { mounted };
};
