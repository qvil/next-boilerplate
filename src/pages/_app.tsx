// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import { wrapper } from "src/redux/store";
import { appWithTranslation } from "src/lib/i18n";
import Header from "src/components/Header";
import GlobalStyle from "src/styles/GlobalStyle";

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
