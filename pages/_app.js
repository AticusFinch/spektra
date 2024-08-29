import "./styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import { Roboto } from "@next/font/google";
import { client } from "../lib/apollo";
import Head from "next/head";
import { useRouter } from "next/router";

export const metadata = {
  title: "Asocijacija Spektra",
  description: "Veb-sajt Asocijacije Spektra",
};

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

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
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </>
  );
}
