import React from "react";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./donate.module.css";

import { FaHeart } from "react-icons/fa6";

const Donate = () => {
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();
  const { locale } = router;

  const handleDonate = () => {
    setIsClicked(true);
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
          <div className={styles.content}>
            <h1 className={styles["donate-head"]}>
              {locale === "sr"
                ? "Pridruži nam se u kreiranju sistema u kom svako ima ravnopravno mjesto"
                : "Join us in creating a system where everyone is in a place of equality"}
            </h1>
            <p className={styles["donate-text"]}>
              {locale === "sr"
                ? "Donirajte i podržite naš rad u borbi za prava trans i rodno varijantnih osoba"
                : "Donate and support our work in the fight for the rights of trans and gender variant people"}
            </p>
            <button onClick={handleDonate} className={styles.button}>
              {isClicked ? (
                <FaHeart className={styles.icon} />
              ) : locale === "sr" ? (
                "Doniraj"
              ) : (
                "Donate"
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
