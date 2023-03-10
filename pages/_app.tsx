import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import PlayerLayout from "../components/playerLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

type AppPropsWithAuth = AppProps & {
  Component: NextPage & {
    authPage?: boolean;
  };
};

const App = ({ Component, pageProps }: AppPropsWithAuth) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  );
};

export default App;
