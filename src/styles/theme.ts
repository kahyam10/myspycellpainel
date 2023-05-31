import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  fontSizes: {
    ...theme.fontSizes,
    "6xl": "54px",
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      200: "#9FBDC4",
      400: "#2B95FF",
      500: "#1688FB",
      600: "#0763BF",
      700: "#054D96",
      800: "#00356b",
      900: "#002b56",
    },
    red:{
      ...theme.colors.red,
      700:"#FF0000"
    },
    gray: {
      ...theme.colors.gray,
      200: "#DEF2F7",
      300: "#CCEAF1",
      500: "#2b3036",
      600: "#202024",
      700: "#141216",
      800: "#121214",
      900: "#12141D",
    },
  },
};

export default customTheme;
