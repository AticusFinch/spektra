import "./styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import Head from "next/head";
import { useRouter } from "next/router";

export const metadata = {
  title: "Asocijacija Spektra",
  description: "Veb-sajt Asocijacije Spektra",
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Head>
        <title>
          {locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"}
        </title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
