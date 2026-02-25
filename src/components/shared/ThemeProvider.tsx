"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { useThemeByTime } from "@/hooks/useThemeByTime";

function ThemeController() {
  useThemeByTime();
  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeController />
      {children}
    </NextThemesProvider>
  );
}
