import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html{
    font-size: 62.5%;
    @media (max-width: 900px) {
      font-size: 50%;
  }
  }
  body{
    min-height: 100vh;
    background-color: #e3e3e3;
    /* background-color:${colors.primary}; */
  }
`;

export default GlobalStyle;
