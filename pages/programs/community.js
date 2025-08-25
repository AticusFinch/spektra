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
        <h1 className={styles.title}>
          {locale === "sr"
            ? "Program za rad sa zajednicom"
            : "Community Work Program"}
        </h1>
        <div className={styles.program}>
          <div className={styles.descCommunity}>
            <p className={styles.introTextCommunity}>
              {locale === "sr"
                ? "S obzirom na izuzetnu važnost pitanja zdravstvene zaštite za zajednicu TIRV osoba, kroz ovaj program aktivno radimo na pozitivnim promjenama u ovoj oblasti. Kako u Crnoj Gori ne postoje posebne usluge za TIRV osobe, socijalne usluge koje Spektra nudi unutar ovog programa jedine su ove vrste u zemlji."
                : "Due to the exceptional importance of the issue of health care for the TIRV community, through this program we actively work on positive changes in this area. Since there are no special services for TIRV people in Montenegro, the only services offered by Spectra within this program are of this type in the country."}
            </p>
            <div className={styles.programAimsCommunity}>
              <p className={styles.programAimsTitleCommunity}>
                {locale === "sr"
                  ? "Ciljevi ovog programa su:"
                  : "The goals of this program are:"}
              </p>
              <ul className={styles.programAimsListCommunity}>
                <li className={styles.programAimsItemCommunity}>
                  <span className={styles.programAimsItemNumberCommunity}>
                    1
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Jačanje servisa psiho-socijalne pomoći."
                      : "Strengthening of the services of psychosocial assistance."}
                  </p>
                </li>
                <li className={styles.programAimsItemCommunity}>
                  <span className={styles.programAimsItemNumberCommunity}>
                    2
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Povećavanje pristupa odgovarajućoj, visokokvalitetnoj, depatologizovanoj zdravstvenoj i socijalnoj zaštiti za TIRV osobe."
                      : "Increasing access to appropriate, high-quality, depatologized health and social care for TIRV people."}
                  </p>
                </li>
                <li className={styles.programAimsItemCommunity}>
                  <span className={styles.programAimsItemNumberCommunity}>
                    3
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Povećanje pristup obrazovanju i tržištu rada i zaštiti radnih prava."
                      : "Increasing access to education and the labor market and protection of labor rights."}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.programHelpCommunity}>
              <div className={styles.programHelpTextContainer}>
                <p className={styles.programHelpTitleCommunity}>
                  {locale === "sr"
                    ? "Kako ti, kao TIRV osobi, možemo biti od pomoći?"
                    : "How can we help you, as a TIRV person?"}
                </p>
                <p className={styles.programHelpTextCommunity}>
                  {locale === "sr"
                    ? "Jedan od naših ciljeva je i kontinuirano pružanje direktne pomoći i psihosocijalne podrške članovima/cama TIRV zajednice. Zato u okviru rada ovog programa organizujemo:"
                    : "One of our goals is to continuously provide direct assistance and psychosocial support to members/members of the TIRV community. Therefore, within the framework of this program, we organize:"}
                </p>
              </div>
              <ul className={styles.programHelpListCommunity}>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      1
                    </span>
                    {locale === "sr"
                      ? "Grupe samopodrške isključivo za TIRV osobe."
                      : "Support groups exclusively for TIRV people."}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      2
                    </span>
                    {locale === "sr"
                      ? "Individualno vršnjačko savjetovanje."
                      : "Individual counseling."}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      3
                    </span>
                    {locale === "sr"
                      ? "Psihosocijalnu podršku i pomoć u integraciji u društvo."
                      : "Psychosocial support and assistance in integration into society."}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      4
                    </span>
                    {locale === "sr"
                      ? "Pomoć u pristupu psihološkoj pomoći, zdravstvenoj zaštiti, pri zapošljavanju, azilu i pravnim postupcima."
                      : "Assistance in accessing psychosocial assistance, health care, employment, asylum and legal procedures."}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      5
                    </span>
                    {locale === "sr"
                      ? "Pomoć u pristupu psihološkoj pomoći, zdravstvenoj zaštiti, pri zapošljavanju, azilu i pravnim postupcima."
                      : "Assistance in accessing psychosocial assistance, health care, employment, asylum and legal procedures."}
                  </p>
                </li>
                <li>
                  <p className={styles.programHelpItemCommunity}>
                    <span className={styles.programHelpItemNumberCommunity}>
                      6
                    </span>
                    {locale === "sr"
                      ? "Djelovanje u ulozi povjerljivog lica u slučajevima nasilja."
                      : "Acting in the role of a confidential person in cases of violence."}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.programCoordinatorsContainer}>
            <p className={styles.programInfoCommunity}>
              {locale === "sr"
                ? "Više informacija o tome kako izgleda sprovođenje ovih aktivnosti dostupno je na našim društvenim mrežama, ili kontaktiranjem asistentkinje Iskre."
                : "More information on how these activities are carried out is available on our social media, or by contacting the assistant Iskra."}
            </p>
            <div className={styles.programCoordinators}>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[4].image}
                    width={teamMembers[4].width}
                    height={teamMembers[4].height}
                    alt={teamMembers[4].name}
                    className={styles.coordinatorImg}
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[4].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
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
