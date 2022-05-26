/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }
  return (
    <ThemeProvider attribute="class">
      <Head>
        <script src="https://kit.fontawesome.com/f4cee9cd6d.js" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
      <Script src="/js/script.js" />
    </ThemeProvider>
  );
}

export default MyApp;
