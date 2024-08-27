import React from "react";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import Container from "../utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Image from "next/image";

import styles from "./community.module.css";

const Community = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>
          {`${
            locale === "sr"
              ? "Program za rad sa zajednicom"
              : "Community Work Program"
          } | ${
            locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"
          }`}
        </title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <Container>
        <h1>
          {locale === "sr"
            ? "Program za rad sa zajednicom"
            : "Community Work Program"}
        </h1>
      </Container>
      <Footer />
    </div>
  );
};

export default Community;
