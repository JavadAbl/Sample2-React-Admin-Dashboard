/* import { createContext, useContext, useState } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// Create a context
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default: light mode

  // Toggle between light/dark
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Create MUI theme based on mode
  const theme = createTheme({
    palette: {
      mode, // 'light' or 'dark'
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; */

import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightColors, lightTheme, darkColors } from "../Theme";

export const ThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});

export const useThemeContext = () => useContext(ThemeContext);

const extendedLightTheme = createTheme(lightTheme, {
  colors: lightColors,
});

const extendedDarkTheme = createTheme(darkTheme, {
  colors: darkColors,
});

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = useMemo(
    () => (isDark ? extendedDarkTheme : extendedLightTheme),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
