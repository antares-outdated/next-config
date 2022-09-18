/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document(props: any) {
  const currentLocale =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
