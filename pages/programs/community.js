import React from "react";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import Container from "../utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Image from "next/image";
import { teamMembers } from "../../lib/teamMembers";

import styles from "../pages.module.css";

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
        <div className={styles.programs}>
          <h1 className={styles.title}>
            {locale === "sr"
              ? "Program za rad sa zajednicom"
              : "Community Work Program"}
          </h1>
          <div className={styles.desc}>
            <p className={styles.introText}>
              {locale === "sr"
                ? "S obzirom na izuzetnu važnost pitanja zdravstvene zaštite za zajednicu TIRV osoba, kroz ovaj program aktivno radimo na pozitivnim promjenama u ovoj oblasti. Kako u Crnoj Gori ne postoje posebne usluge za TIRV osobe, socijalne usluge koje Spektra nudi unutar ovog programa jedine su ove vrste u zemlji."
                : "Due to the exceptional importance of the issue of health care for the TIRV community, through this program we actively work on positive changes in this area. Since there are no special services for TIRV people in Montenegro, the only services offered by Spectra within this program are of this type in the country."}
            </p>
            <div className={styles.programAims}>
              <p className={styles.programAimsTitle}>
                {locale === "sr"
                  ? "Ciljevi ovog programa su:"
                  : "The goals of this program are:"}
              </p>
              <ul className={styles.programAimsList}>
                <li>
                  <p className={styles.programAimsItem}>
                    {locale === "sr"
                      ? "jačanje servisa psiho-socijalne pomoći,"
                      : "strengthening of the services of psychosocial assistance,"}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsItem}>
                    {locale === "sr"
                      ? "povećavanje pristupa odgovarajućoj, visokokvalitetnoj, depatologizovanoj zdravstvenoj i socijalnoj zaštiti za TIRV osobe"
                      : "increasing access to appropriate, high-quality, depatologized health and social care for TIRV people"}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsItem}>
                    {locale === "sr"
                      ? "povećanje pristup obrazovanju i tržištu rada i zaštiti radnih prava."
                      : "increasing access to education and the labor market and protection of labor rights."}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.programHelp}>
              <p className={styles.programHelpTitle}>
                {locale === "sr"
                  ? "Kako ti, kao TIRV osobi, možemo biti od pomoći?"
                  : "How can we help you, as a TIRV person?"}
              </p>
              <p className={styles.programHelpText}>
                {locale === "sr"
                  ? "Jedan od naših ciljeva je i kontinuirano pružanje direktne pomoći i psihosocijalne podrške članovima/cama TIRV zajednice. Zato u okviru rada ovog programa organizujemo:"
                  : "One of our goals is to continuously provide direct assistance and psychosocial support to members/members of the TIRV community. Therefore, within the framework of this program, we organize:"}
              </p>
              <ul className={styles.programHelpList}>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "grupe samopodrške isključivo za TIRV osobe;"
                      : "support groups exclusively for TIRV people;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "individualno vršnjačko savjetovanje;"
                      : "individual counseling;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "psihosocijalnu podršku i pomoć u integraciji u društvo"
                      : "psychosocial support and assistance in integration into society"}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "pomoć u pristupu psihološkoj pomoći, zdravstvenoj zaštiti, pri zapošljavanju, azilu i pravnim postupcima;"
                      : "assistance in accessing psychosocial assistance, health care, employment, asylum and legal procedures;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "pomoć u pristupu psihološkoj pomoći, zdravstvenoj zaštiti, pri zapošljavanju, azilu i pravnim postupcima;"
                      : "assistance in accessing psychosocial assistance, health care, employment, asylum and legal procedures;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItem}>
                    {locale === "sr"
                      ? "djelovanje u ulozi povjerljivog lica u slučajevima nasilja."
                      : "acting in the role of a confidential person in cases of violence."}
                  </p>
                </li>
              </ul>
            </div>
            <p className={styles.programInfo}>
              {locale === "sr"
                ? "Više informacija o tome kako izgleda sprovođenje ovih aktivnosti dostupno je na našim društvenim mrežama, ili kontaktiranjem asistentkinje Iskre."
                : "More information on how these activities are carried out is available on our social media, or by contacting the assistant Iskra."}
            </p>
            <div className={styles["program-coordinators"]}>
              <div className={styles["program-coordinator"]}>
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[4].image}
                    width="250"
                    height="250"
                    alt={teamMembers[4].name}
                    className={styles["coordinator-img"]}
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className={styles["coordinator-text"]}>
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[4].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[4].pozicija
                        : teamMembers[4].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[4].bioProgramMNE
                        : teamMembers[4].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[4].email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Community;
