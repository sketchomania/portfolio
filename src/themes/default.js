import Colors from "../constants/colors";

const defaultTheme = {
  //fonts
  fonts: {
    title: "sans-serif",
    main: "sans-serif",
  },
  // layout colors
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 480px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 976px)",
    xl: "screen and (max-width: 1280px)",
  },
};

const light = {
  bg: {
    body: "#E2E2E2",
    text: "#363537",
    //  text: "#000000",
    toggleBorder: "#FFF'",
    gradient: "linear-gradient(#39598A, #79D7ED)",
    gradStart: Colors.gradLightStart,
    gradEnd: Colors.gradEnd,
  },
};

const dark = {
  bg: {
    // body: "#363537",
    // body: "#000000",
    body: "#171717",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradStart: Colors.gradDarkStart,
    gradEnd: Colors.gradEnd,
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
// 640px