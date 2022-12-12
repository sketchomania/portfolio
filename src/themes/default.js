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
    gradStartBlur: Colors.gradLightStartBlur,
    gradEnd: Colors.gradEnd,
    gradEndBlur: Colors.gradEndBlur,
    sectionText: Colors.darkBody,
    sectionSubText: Colors.darkGray,
    blurBackground: Colors.lightBlurBackground,
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
    gradStartBlur: Colors.gradDarkStartBlur,
    gradEnd: Colors.gradEnd,
    gradEndBlur: Colors.gradEndBlur,
    sectionText: Colors.lightBody,
    sectionSubText: Colors.whiteTrans,
    blurBackground: Colors.darkBlurBackground,
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
// 640px//600px
// 1280 976 768 480
