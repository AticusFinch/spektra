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
        <div className={styles.programs}>
          <h1 className={styles.title}>
            {locale === "sr" ? "Program zagovaranja" : "Advocacy Program"}
          </h1>
          <div className={styles.descAdvocacy}>
            <p className={styles.introTextAdvocacy}>
              {locale === "sr"
                ? "Naš zagovarački program se temelji na principima inkluzije, ravnopravnosti i poštovanja ljudskih prava, s ciljem građenja društva u kojem svaka osoba može živjeti slobodno i bez straha od diskriminacije ili nasilja."
                : "Our advocacy program is based on the principles of inclusion, equality and respect for human rights, with the goal of building a society in which every person can live freely and without fear of discrimination or violence."}
            </p>
            <div className={styles.programAimsAdvocacy}>
              <p className={styles.programAimsAdvocacyTitle}>
                {locale === "sr"
                  ? "Ciljevi ovog programa su:"
                  : "The goals of this program are:"}
              </p>
              <ul className={styles.programAimsAdvocacyList}>
                <li>
                  <p className={styles.programAimsAdvocacyItem}>
                    {locale === "sr"
                      ? "unapređenje ljudskih prava TIRV zajednice kroz unapređenje zakonodavnog okvira, nacionalnih strategija i politika;"
                      : "improvement of human rights of the TIRV community through the improvement of the legal framework, national strategies and policies;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsAdvocacyItem}>
                    {locale === "sr"
                      ? "doprinos očuvanju demokratije kroz aktivno djelovanje u javnom prostoru."
                      : "contribution to the preservation of democracy through active action in the public space."}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsAdvocacyItem}>
                    {locale === "sr"
                      ? "podizanje svijesti o izazovima sa kojima se suočava zajednica, kroz medijske kampanje i izdavanje edukativnih materijala, organizovanjem javnih kampanja i događaja;"
                      : "raising awareness about the challenges faced by the community, through media campaigns and the issuance of educational materials, organizing public campaigns and events;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsAdvocacyItem}>
                    {locale === "sr"
                      ? "obuka profesionalaca iz različitih sektora, uključujući zdravstveni, pravni i obrazovni, kako bi se osigurala bolja informisanost i senzibilisanost;"
                      : "training professionals from various sectors, including health, legal and educational, to ensure better awareness and sensitivity;"}
                  </p>
                </li>
                <li>
                  <p className={styles.programAimsAdvocacyItem}>
                    {locale === "sr"
                      ? "aktivna saradnja sa državnim institucijama, nevladinim organizacijama i međunarodnim partnerima u cilju što efektivnijeg postizanja ovih ciljeva."
                      : "active collaboration with state institutions, non-governmental organizations and international partners in order to achieve these goals more effectively."}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.programHelpAdvocacy}>
              <p className={styles.programHelpAdvocacyTitle}>
                {locale === "sr"
                  ? "Trenutno je rad ovog programa najviše usmjeren kampanji za pravno prepoznavanje roda tj. zagovaranje za usvajanje Zakona o pravnom prepoznavanju rodnog identiteta na osnovu samoodređenja."
                  : "Currently, the main focus of this program is the campaign for legal recognition of gender identity, i.e. advocacy for the adoption of the Law on the legal recognition of gender identity based on self-determination."}
              </p>
            </div>
            <div
              className={`${styles["program-coordinators"]} ${styles["program-coordinators-advocacy"]}`}
            >
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[0].image}
                    width="250"
                    height="250"
                    alt={teamMembers[0].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[0].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[0].pozicija
                        : teamMembers[0].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[0].bioProgramMNE
                        : teamMembers[0].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[0].email}</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[3].image}
                    width={teamMembers[3].width}
                    height={teamMembers[3].height}
                    alt={teamMembers[3].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[3].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[3].pozicija
                        : teamMembers[3].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[3].bioProgramMNE
                        : teamMembers[3].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[3].email}</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[6].image}
                    width="250"
                    height="250"
                    alt={teamMembers[6].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[6].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[6].pozicija
                        : teamMembers[6].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[6].bioProgramMNE
                        : teamMembers[6].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[6].email}</p>
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

export default Advocacy;
