import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.bg.body};
    color: ${(props) => props.theme.bg.text};
    cursor: default;
    ::-webkit-scrollbar{
      width: 10px;
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background: linear-gradient(180deg, ${(props) => props.theme.bg.gradStart} 0%, ${(props) => props.theme.bg.gradEnd} 100%); 
    }
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
