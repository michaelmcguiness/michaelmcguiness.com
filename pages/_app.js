import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core";

import * as gtag from "../utils/gtag";
import theme from "../styles/theme";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import MDXComponents from "@components/MDXComponents";
import SEO from "../next-seo.config";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="light">
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
