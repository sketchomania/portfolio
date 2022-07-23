import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = (props) => {
  // const theme = props.theme;
  return (
    <ThemeProvider theme={props.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
