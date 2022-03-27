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
    toggleBorder: "#FFF'",
    gradient: "linear-gradient(#39598A, #79D7ED)",
  },
};

const dark = {
  bg: {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

// screens: {
//   sm: "480px",
//   md: "768px",
//   lg: "976px",
//   xl: "1280px",
// },