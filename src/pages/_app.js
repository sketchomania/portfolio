import { useState } from "react";
import Theme from "../styles/theme";
import "../styles/globals.css";
// import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Theme theme={theme} toggleTheme={toggleTheme}>
        <Component toggleTheme={toggleTheme} theme={theme} {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
