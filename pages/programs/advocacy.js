import React from "react";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import Container from "../utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Image from "next/image";

import styles from "./advocacy.module.css";

const Advocacy = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>
          {`${locale === "sr" ? "Program zagovaranja" : "Advocacy Program"} | ${
            locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"
          }`}
        </title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <Container>
        <h1>{locale === "sr" ? "Program zagovaranja" : "Advocacy Program"}</h1>
      </Container>
      <Footer />
    </div>
  );
};

export default Advocacy;
