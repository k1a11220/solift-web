import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
      </Head>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
