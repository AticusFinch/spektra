import React from "react";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./donate.module.css";

import { FaHeart } from "react-icons/fa6";

const Donate = () => {
  const router = useRouter();
  const { locale } = router;

  const handleDonate = () => {
    console.log("Donation successful!");
  };

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";

  return (
    <div>
      <Head>
        <title>{`${websiteTitle} | ${
          locale === "sr" ? "Doniraj" : "Donate"
        }`}</title>
      </Head>
      <Navigation />
      <div className={styles.donate}>
        <div className={styles.overlay}>
          {" "}
          <h1 className={styles["donate-head"]}>
            {locale === "sr"
              ? "Pridruži nam se u kreiranju sistema u kom svako ima ravnopravno mjesto"
              : "Join us in creating a system where everyone is in a place of equality"}
            <FaHeart className={styles.icon} />
          </h1>
          <button onClick={handleDonate} className={styles.button}>
            Donate Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
