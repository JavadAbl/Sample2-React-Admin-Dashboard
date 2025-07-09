import { createTheme } from "@mui/material/styles";

/* export const themeColors = (mode) => {
  return {
    ...(mode === "light" ? lightColors : darkColors),
  };
};

export const themeSettings = (mode) => {
  const colors = themeColors(mode);

  return {};
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
}); */

export const lightColors = {
  primary: {
    100: "#e8f0fe",
    200: "#d2e1fd",
    300: "#bbd2fc",
    400: "#a5c3fb",
    500: "#8ab4f8", // Base
    600: "#6e90c6",
    700: "#536c94",
    800: "#374863",
    900: "#1c2431",
  },
  secondary: {
    100: "#e6f4ea",
    200: "#cde9d5",
    300: "#b4dec0",
    400: "#9bd3ab",
    500: "#81c995", // Base
    600: "#67a177",
    700: "#4d7959",
    800: "#33503b",
    900: "#1a281e",
  },
  accent: {
    100: "#fde8e6",
    200: "#fbd1cd",
    300: "#f8bab4",
    400: "#f6a39b",
    500: "#f28b82", // Base
    600: "#c26f68",
    700: "#91534e",
    800: "#613834",
    900: "#301c1a",
  },
  background: {
    100: "#ffffff",
    200: "#f5f5f5",
    300: "#ebebeb",
    400: "#e0e0e0",
    500: "#ffffff", // Base (white)
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
  text: {
    100: "#f5f5f5",
    200: "#ebebeb",
    300: "#e0e0e0",
    400: "#d6d6d6",
    500: "#202124", // Base (dark gray)
    600: "#191a1c",
    700: "#131415",
    800: "#0c0d0e",
    900: "#060607",
  },
};

export const darkColors = {
  primary: {
    100: "#0d1b31",
    200: "#1a3562",
    300: "#285092",
    400: "#356ac3",
    500: "#4285f4", // Base
    600: "#689df6",
    700: "#8eb6f8",
    800: "#b3cefb",
    900: "#d9e7fd",
  },
  secondary: {
    100: "#1a281e",
    200: "#33503b",
    300: "#4d7959",
    400: "#67a177",
    500: "#34a853", // Base
    600: "#9bd3ab",
    700: "#b4dec0",
    800: "#cde9d5",
    900: "#e6f4ea",
  },
  accent: {
    100: "#301c1a",
    200: "#613834",
    300: "#91534e",
    400: "#c26f68",
    500: "#ea4335", // Base
    600: "#f6a39b",
    700: "#f8bab4",
    800: "#fbd1cd",
    900: "#fde8e6",
  },
  background: {
    100: "#121212",
    200: "#1e1e1e",
    300: "#2b2b2b",
    400: "#373737",
    500: "#121212", // Base (near-black)
    600: "#666666",
    700: "#999999",
    800: "#cccccc",
    900: "#ffffff",
  },
  text: {
    100: "#060607",
    200: "#0c0d0e",
    300: "#131415",
    400: "#191a1c",
    500: "#e0e0e0", // Base (light gray)
    600: "#d6d6d6",
    700: "#e0e0e0",
    800: "#ebebeb",
    900: "#f5f5f5",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: lightColors.primary[300],
      main: lightColors.primary[500],
      dark: lightColors.primary[700],
      contrastText: lightColors.background[100],
    },
    secondary: {
      light: lightColors.secondary[300],
      main: lightColors.secondary[500],
      dark: lightColors.secondary[700],
      contrastText: lightColors.background[100],
    },
    error: {
      light: lightColors.accent[300],
      main: lightColors.accent[500],
      dark: lightColors.accent[700],
      contrastText: lightColors.background[100],
    },
    background: {
      default: lightColors.background[500],
      paper: lightColors.background[200],
    },
    text: {
      primary: lightColors.text[500],
      secondary: lightColors.text[400],
      disabled: lightColors.text[300],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: darkColors.primary[300],
      main: darkColors.primary[500],
      dark: darkColors.primary[700],
      contrastText: darkColors.background[100],
    },
    secondary: {
      light: darkColors.secondary[300],
      main: darkColors.secondary[500],
      dark: darkColors.secondary[700],
      contrastText: darkColors.background[100],
    },
    error: {
      light: darkColors.accent[300],
      main: darkColors.accent[500],
      dark: darkColors.accent[700],
      contrastText: darkColors.background[100],
    },
    background: {
      default: darkColors.background[500],
      paper: darkColors.background[300],
    },
    text: {
      primary: darkColors.text[500],
      secondary: darkColors.text[400],
      disabled: darkColors.text[300],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
