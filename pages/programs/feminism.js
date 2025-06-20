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

const Feminism = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>
          {`${
            locale === "sr" ? "Feministički program" : "Feminism Program"
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
            {locale === "sr" ? "Feministički program" : "Feminism Program"}
          </h1>
          <div className={styles.desc}>
            <p className={styles.introText}>
              {locale === "sr"
                ? "Feministički program prepoznaje površno, formalističko, i heteronormativno tretiranje feminizma i feminističkih principa u formalnom i neformalnom obrazovanju, što za posljedicu ima neprestano tretiranje feminizma i rodne ravnopravnosti kao isključivo ženskog pitanja. Ovo sprečava suštinsku i zajedničku borbu protiv patrijarhalnog sistema unutar opresivnog kapitalističkog sistema, i samim tim omogućava njihov opstanak."
                : "The feminist program recognizes the superficial, formalist, and heteronormative treatment of feminism and feminist principles in formal and informal education, which has as a consequence the constant treatment of feminism and gender equality as exclusively a women's issue. This prevents the fundamental and common struggle against the patriarchal system within the oppressive capitalist system, and thus allows their survival."}
            </p>
            <div
              className={`${styles.programAims} ${styles.programAimsFeminism}`}
            >
              <p className={styles.programAimsTitle}>
                {locale === "sr"
                  ? "Ciljevi ovog programa su:"
                  : "The goals of this program are:"}
              </p>
              <ul className={styles.programAimsList}>
                <li>
                  {locale === "sr"
                    ? "povećana zastupljenost neformalnog feminističkog obrazovanja;"
                    : "increased presence of informal feminist education;"}
                </li>
                <li>
                  {locale === "sr"
                    ? "vidljivost feminističkih vrijednosti i principa;"
                    : "visibility of feminist values and principles;"}
                </li>
                <li>
                  {locale === "sr"
                    ? "povećan stepen razumijevanja i vidljivosti TIRV zajednice;"
                    : "increased level of understanding and visibility of the TIRV community;"}
                </li>
                <li>
                  {locale === "sr"
                    ? "jačanje kapaciteta organizacije za aktivno, efikasno i profesionalno djelovanje;"
                    : "strengthening the capacity of the organization for active, effective and professional work;"}
                </li>
                <li>
                  {locale === "sr"
                    ? "njegovanje i jačanje feminističkog savezništva."
                    : "promotion and strengthening of feminist solidarity."}
                </li>
              </ul>
            </div>
            <p className={styles.programInfoFeminism}>
              {locale === "sr"
                ? "Ovaj program pomno prati aktuelne društvene trendove, i organizovanjem različitih radionica, festivala, i brojnih drugih interaktivnih multimedijalnih događaja nudi ideje kako im pristupiti. U okviru ovog programa koristimo različite kanale kako bi se ključne feminističke teme sa margine proširile ka centru, postale opšteprožimajuće i ostvarile svoj preobražujući potencijal pri kreiranju društva i toga kako u njemu živimo, radimo, brinemo i volimo. Zato unutar ovog programa aktivno djeluje i tim za komunikacije."
                : "This program closely monitors current social trends, and by organizing various workshops, festivals, and numerous other interactive multimedia events offers ideas on how to approach them. Within this program, we use various channels to bring key feminist themes from the margins to the center, becoming pervasive and realizing their transformative potential in shaping society and how we live, work, care, and love in it. That is why a communications team is also actively involved in this program."}
            </p>
            <div className={styles.programKomsTeam}>
              <p className={styles.programKomsTeamTitle}>
                {locale === "sr" ? "RAD KOMS TIMA" : "WORK OF THE COMMS TEAM"}
              </p>
              <p className={styles.programKomsTeamText}>
                {locale === "sr"
                  ? "Kroz feministički program i upotrebu kreativnih metoda i inovativnih pristupa radu kombinujemo feminističko znanje, umjetnički senzibilitet, i tehnologiju. Stoga nam je važno da ostanemo što aktivniji i vidljiviji putem brojnih dostupnih platformi, bilo kroz tradicionalne medije ili društvene mreže (koje su naročito važne, budući da su ove teme često izostavljene iz medijskog diskursa, ili se ne prenose vjerodostojno). Snalaženje kroz prepreke algoritama, nalaženje zanimljivih načina da feministički sadržaj prilagodimo tako da se što veći broj ljudi može sa njim poistovjetiti – to osigurava rad tima za komunikacije unutar ovog programa."
                  : "Through a feminist program and the use of creative methods and innovative approaches to work, we combine feminist knowledge, artistic sensibility, and technology. Therefore, it is important for us to remain as active and visible as possible through the many available platforms, whether through traditional media or social networks (which are especially important, since these topics are often omitted from the media discourse, or are not transmitted credibly). Navigating the obstacles of algorithms, finding interesting ways to adapt feminist content so that as many people as possible can identify with it – this is what the communications team within this program ensures."}
              </p>
            </div>
            <div
              className={`${styles["program-coordinators"]} ${styles["program-coordinators-feminism"]}`}
            >
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[2].image}
                    width={teamMembers[2].width}
                    height={teamMembers[2].height}
                    alt={teamMembers[2].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[2].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[2].pozicija
                        : teamMembers[2].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[2].bioProgramMNE
                        : teamMembers[2].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[2].email}</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[1].image}
                    width={teamMembers[1].width}
                    height={teamMembers[1].height}
                    alt={teamMembers[1].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[1].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[1].pozicija
                        : teamMembers[1].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[1].bioProgramMNE
                        : teamMembers[1].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[1].email}</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
              >
                <div className={styles["coordinator-img-container"]}>
                  <Image
                    src={teamMembers[5].image}
                    width={teamMembers[5].width}
                    height={teamMembers[5].height}
                    alt={teamMembers[5].name}
                    className={styles["coordinator-img"]}
                  />
                </div>
                <div
                  className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                >
                  <div>
                    <h3 className={styles["coordinator-name"]}>
                      {teamMembers[5].name}
                    </h3>
                    <p className={styles["coordinator-role"]}>
                      {locale === "sr"
                        ? teamMembers[5].pozicija
                        : teamMembers[5].role}
                    </p>
                  </div>
                  <div>
                    <p className={styles["coordinator-bio"]}>
                      {locale === "sr"
                        ? teamMembers[5].bioProgramMNE
                        : teamMembers[5].bioProgramENG}
                    </p>
                  </div>
                  <div className={styles["coordinator-contact"]}>
                    <p>{teamMembers[5].email}</p>
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

export default Feminism;
