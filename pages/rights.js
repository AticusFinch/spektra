import React from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./rights.module.css";

const Rights = () => {
  const router = useRouter();
  const { locale } = router;

  const link =
    "https://stackoverflow.com/questions/37909841/css-smooth-button-gradient-color-transition-on-hover";

  return (
    <div>
      <Head></Head>
      <Navigation />
      <div className={styles.rights}>
        <div className={styles.overlay}>
          <div className={styles["rights-container"]}>
            <div className={styles["rights-head-container"]}>
              <h1 className={styles["rights-head"]}>
                {locale === "sr" ? "ZNAJ SVOJA PRAVA" : "KNOW YOUR RIGHTS"}
              </h1>
            </div>
            <div className={styles["rights-content"]}>
              <p className={styles.info}>
                {locale === "sr"
                  ? "Informiši se o svojim pravima! Klikom na dugme ispod možeš preuzeti dokument sa svim neophodnim informacijama."
                  : "Inform yourself about your rights! By clicking the button below you can download a document with all the necessary information."}
              </p>
              <button
                onClick={(e) => {
                  window.open(link, "_blank");
                }}
                className={styles.button}
              >
                {locale === "sr" ? "PREUZMI DOKUMENT" : "DOWNLOAD DOCUMENT"}
              </button>
              <p className={styles.contact}>
                {locale === "sr"
                  ? "Ukoliko ti je neophodna pomoć ili podrška pri pristupanju sopstvenim pravima kontaktiraj nas putem emaila:"
                  : "If you need help or support in accessing your rights, contact us via email:"}
                <span className={styles.email}>
                  info@asocijacijaspektra.org
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rights;
