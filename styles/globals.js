import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;
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
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: url(cursor-pointer-2.cur), auto;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    cursor: url(cursor-link-2.cur), auto;
  }
  button {
    cursor: url(cursor-link-2.cur), auto;

  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
