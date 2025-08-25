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
import { GoDot } from "react-icons/go";

import styles from "./pages.module.css";

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
        <h1 className={styles.title}>
          {locale === "sr" ? "Feministički program" : "Feminism Program"}
        </h1>
        <div className={styles.program}>
          <div className={styles.descFeminism}>
            <p className={styles.introTextFeminism}>
              {locale === "sr"
                ? "Feministički program prepoznaje površno, formalističko, i heteronormativno tretiranje feminizma i feminističkih principa u formalnom i neformalnom obrazovanju, što za posljedicu ima neprestano tretiranje feminizma i rodne ravnopravnosti kao isključivo ženskog pitanja. Ovo sprečava suštinsku i zajedničku borbu protiv patrijarhalnog sistema unutar opresivnog kapitalističkog sistema, i samim tim omogućava njihov opstanak."
                : "The feminist program recognizes the superficial, formalist, and heteronormative treatment of feminism and feminist principles in formal and informal education, which has as a consequence the constant treatment of feminism and gender equality as exclusively a women's issue. This prevents the fundamental and common struggle against the patriarchal system within the oppressive capitalist system, and thus allows their survival."}
            </p>
            <div
              className={`${styles.programAims} ${styles.programAimsFeminism}`}
            >
              <p className={styles.programAimsTitleFeminism}>
                {locale === "sr"
                  ? "Ciljevi ovog programa su:"
                  : "The goals of this program are:"}
              </p>
              <ul className={styles.programAimsListFeminism}>
                <li className={styles.programAimsItemFeminism}>
                  <span className={styles.programAimsItemNumberFeminism}>
                    1
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Povećana zastupljenost neformalnog feminističkog obrazovanja."
                      : "Increased presence of informal feminist education."}
                  </p>
                </li>
                <li className={styles.programAimsItemFeminism}>
                  <span className={styles.programAimsItemNumberFeminism}>
                    2
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Vidljivost feminističkih vrijednosti i principa."
                      : "Visibility of feminist values and principles."}
                  </p>
                </li>
                <li className={styles.programAimsItemFeminism}>
                  <span className={styles.programAimsItemNumberFeminism}>
                    3
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Povećan stepen razumijevanja i vidljivosti TIRV zajednice."
                      : "Increased level of understanding and visibility of the TIRV community."}
                  </p>
                </li>
                <li className={styles.programAimsItemFeminism}>
                  <span className={styles.programAimsItemNumberFeminism}>
                    4
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Jačanje kapaciteta organizacije za aktivno, efikasno i profesionalno djelovanje."
                      : "Strengthening the capacity of the organization for active, effective and professional work."}
                  </p>
                </li>
                <li className={styles.programAimsItemFeminism}>
                  <span className={styles.programAimsItemNumberFeminism}>
                    5
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Njegovanje i jačanje feminističkog savezništva."
                      : "Promotion and strengthening of feminist solidarity."}
                  </p>
                </li>
              </ul>
            </div>
            <p className={styles.programInfoTextFeminism}>
              {locale === "sr"
                ? "Ovaj program pomno prati aktuelne društvene trendove, i organizovanjem različitih radionica, festivala, i brojnih drugih interaktivnih multimedijalnih događaja nudi ideje kako im pristupiti. U okviru ovog programa koristimo različite kanale kako bi se ključne feminističke teme sa margine proširile ka centru, postale opšteprožimajuće i ostvarile svoj preobražujući potencijal pri kreiranju društva i toga kako u njemu živimo, radimo, brinemo i volimo. Zato unutar ovog programa aktivno djeluje i tim za komunikacije."
                : "This program closely monitors current social trends, and by organizing various workshops, festivals, and numerous other interactive multimedia events offers ideas on how to approach them. Within this program, we use various channels to bring key feminist themes from the margins to the center, becoming pervasive and realizing their transformative potential in shaping society and how we live, work, care, and love in it. That is why a communications team is also actively involved in this program."}
            </p>
            <div className={styles.komsTeam}>
              <p className={styles.teamTitle}>
                {locale === "sr" ? "RAD KOMS TIMA" : "WORK OF THE COMMS TEAM"}
              </p>
              <p className={styles.teamText}>
                {locale === "sr"
                  ? "Kroz feministički program i upotrebu kreativnih metoda i inovativnih pristupa radu kombinujemo feminističko znanje, umjetnički senzibilitet, i tehnologiju. Stoga nam je važno da ostanemo što aktivniji i vidljiviji putem brojnih dostupnih platformi, bilo kroz tradicionalne medije ili društvene mreže (koje su naročito važne, budući da su ove teme često izostavljene iz medijskog diskursa, ili se ne prenose vjerodostojno). Snalaženje kroz prepreke algoritama, nalaženje zanimljivih načina da feministički sadržaj prilagodimo tako da se što veći broj ljudi može sa njim poistovjetiti – to osigurava rad tima za komunikacije unutar ovog programa."
                  : "Through a feminist program and the use of creative methods and innovative approaches to work, we combine feminist knowledge, artistic sensibility, and technology. Therefore, it is important for us to remain as active and visible as possible through the many available platforms, whether through traditional media or social networks (which are especially important, since these topics are often omitted from the media discourse, or are not transmitted credibly). Navigating the obstacles of algorithms, finding interesting ways to adapt feminist content so that as many people as possible can identify with it – this is what the communications team within this program ensures."}
              </p>
            </div>
          </div>
          <div className={styles.programCoordinatorsContainer}>
            <h2 className={styles.programCoordinatorsTitle}>
              {locale === "sr" ? "Upoznajte KOMs TIM" : "Meet the COMs TEAM"}
            </h2>
            <div className={styles.programCoordinators}>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[2].image}
                    width={teamMembers[2].width}
                    height={teamMembers[2].height}
                    alt={teamMembers[2].name}
                    className={styles.coordinatorImg}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[2].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
                    <p>{teamMembers[2].email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[1].image}
                    width={teamMembers[1].width}
                    height={teamMembers[1].height}
                    alt={teamMembers[1].name}
                    className={styles.coordinatorImg}
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[1].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
                    <p>{teamMembers[1].email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[5].image}
                    width={teamMembers[5].width}
                    height={teamMembers[5].height}
                    alt={teamMembers[5].name}
                    className={styles.coordinatorImg}
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[5].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
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
