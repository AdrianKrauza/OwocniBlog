import GlobalStyle from "../theme/globalStyle";
import theme from "../theme/";
import { ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default MyApp;
