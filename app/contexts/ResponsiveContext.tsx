"use client";

import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

// Defina o tipo do contexto
type ResponsiveContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

// Crie o contexto já tipado
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width:360px)");
  const isTablet = useMediaQuery("(min-width:361px) and (max-width:720px)");
  const isDesktop = useMediaQuery("(min-width:721px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Evita o render até estar no client
  if (!mounted) return null;

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
}
