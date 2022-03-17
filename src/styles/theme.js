import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = (props) => {
  // const theme = props.theme;
  return (
    <ThemeProvider theme={props.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={props.toggleTheme}>Switch Theme</button>
      {props.children}
      <p>hi 12</p>
    </ThemeProvider>
  );
};

export default Theme;
