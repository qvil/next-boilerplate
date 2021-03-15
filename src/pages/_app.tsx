// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { appWithTranslation } from "next-i18next";

import GlobalStyle from "src/styles/GlobalStyle";
import Header from "src/components/Header";
import { wrapper } from "src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(appWithTranslation(MyApp));
