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
    md: "screen and (max-width: 680px)",
    lg: "screen and (max-width: 880px)",
    xl: "screen and (max-width: 1080px)",
  },
};

const light = {
  bg: {
    body: Colors.lightBody,
    text: Colors.darkText,
    textNoHover: Colors.darkText,
    textHover: Colors.black,
    toggleBorder: Colors.white,
    gradient: "linear-gradient(#39598A, #79D7ED)",
    gradStart: Colors.gradLightStart,
    gradEnd: Colors.gradEnd,
    sectionText: Colors.darkBody,
    sectionSubText: Colors.darkGray,
  },
};

const dark = {
  bg: {
    body: Colors.darkBody,
    text: Colors.darkTextHover,
    textNoHover: Colors.grey,
    textHover: Colors.darkTextHover,
    toggleBorder: "#6B8096",
    gradStart: Colors.gradDarkStart,
    gradEnd: Colors.gradEnd,
    sectionText: Colors.lightBody,
    sectionSubText: Colors.whiteTrans2,
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
// 640px//600px
// 1280 976 768 480
