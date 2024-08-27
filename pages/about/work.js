import React from "react";
import Container from "../utils/container";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";
import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

import styles from "./work.module.css";

const Work = ({ pages }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>
          {`${locale === "sr" ? "Čime se bavimo?" : "What we do?"} | ${
            locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"
          }`}
        </title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <Container>
        <h1 className={styles.head}>Pages</h1>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>{page.title}</li>
          ))}
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetPages {
        pages {
          nodes {
            id
            title
            slug
          }
        }
      }
    `,
  });

  return {
    props: {
      pages: data.pages.nodes,
    },
  };
}

export default Work;
