import "../styles/globals.css";

import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PAGE_CONFIG from "../router/config";
import DefaultLayouts from "../Layouts/DefaultLayout";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const { pathname } = useRouter();
  const getLayout = () => {
    const page = Object.values(PAGE_CONFIG).find((key) => key.url === pathname);
    if (page) return page.layout;
    else return DefaultLayouts;
  };
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const Layout = getLayout();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AnimateSharedLayout type="crossfade">
          <>
            {Layout && (
              <Layout
                pageProps={pageProps}
                ColorModeContext={ColorModeContext}
                component={Component}
              />
            )}
          </>
        </AnimateSharedLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
