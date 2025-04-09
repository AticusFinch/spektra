import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Image from "next/image";
import styles from "./whatWeDo.module.css";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";

const WhatWeDo = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>What We Do</title>
        <meta name="description" content="What We Do" />
      </Head>
      <Navigation />
      <div className={styles.whatWeDo}>
        <h1>What We Do</h1>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
