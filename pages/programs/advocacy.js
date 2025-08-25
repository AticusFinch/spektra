import React from "react";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import Container from "../utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { teamMembers } from "../../lib/teamMembers";

import styles from "./pages.module.css";

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
        <h1 className={styles.title}>
          {locale === "sr" ? "Program zagovaranja" : "Advocacy Program"}
        </h1>
        <div className={styles.program}>
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
                <li className={styles.programAimsAdvocacyItem}>
                  <span className={styles.programAimsAdvocacyItemNumber}>
                    1
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Unapređenje ljudskih prava TIRV zajednice kroz unapređenje zakonodavnog okvira, nacionalnih strategija i politika."
                      : "Improvement of human rights of the TIRV community through the improvement of the legal framework, national strategies and policies."}
                  </p>
                </li>

                <li className={styles.programAimsAdvocacyItem}>
                  <span className={styles.programAimsAdvocacyItemNumber}>
                    2
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Podizanje svijesti o izazovima sa kojima se suočava zajednica, kroz medijske kampanje i izdavanje edukativnih materijala, organizovanjem javnih kampanja i događaja."
                      : "Raising awareness about the challenges faced by the community, through media campaigns and the issuance of educational materials, organizing public campaigns and events."}
                  </p>
                </li>
                <li className={styles.programAimsAdvocacyItem}>
                  <span className={styles.programAimsAdvocacyItemNumber}>
                    3
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Obuka profesionalaca iz različitih sektora, uključujući zdravstveni, pravni i obrazovni, kako bi se osigurala bolja informisanost i senzibilisanost."
                      : "Training professionals from various sectors, including health, legal and educational, to ensure better awareness and sensitivity."}
                  </p>
                </li>
                <li className={styles.programAimsAdvocacyItem}>
                  <span className={styles.programAimsAdvocacyItemNumber}>
                    4
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Aktivna saradnja sa državnim institucijama, nevladinim organizacijama i međunarodnim partnerima u cilju što efektivnijeg postizanja ovih ciljeva."
                      : "Active collaboration with state institutions, non-governmental organizations and international partners in order to achieve these goals more effectively."}
                  </p>
                </li>
                <li className={styles.programAimsAdvocacyItem}>
                  <span className={styles.programAimsAdvocacyItemNumber}>
                    5
                  </span>
                  <p>
                    {locale === "sr"
                      ? "Doprinos očuvanju demokratije kroz aktivno djelovanje u javnom prostoru."
                      : "Contribution to the preservation of democracy through active action in the public space."}
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
          </div>
          <div className={styles.programCoordinatorsContainer}>
            <h2 className={styles.programCoordinatorsTitle}>
              {locale === "sr"
                ? "Upoznajte naše zagovarače"
                : "Meet our advocates"}
            </h2>
            <div className={styles.programCoordinators}>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[0].image}
                    width={teamMembers[0].width}
                    height={teamMembers[0].height}
                    alt={teamMembers[0].name}
                    className={styles.coordinatorImg}
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[0].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
                    <p>{teamMembers[0].email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[3].image}
                    width={teamMembers[3].width}
                    height={teamMembers[3].height}
                    alt={teamMembers[3].name}
                    className={styles.coordinatorImg}
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[3].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
                    <p>{teamMembers[3].email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.programCoordinator}>
                <div className={styles.coordinatorImgContainer}>
                  <Image
                    src={teamMembers[6].image}
                    width={teamMembers[6].width}
                    height={teamMembers[6].height}
                    alt={teamMembers[6].name}
                    className={styles.coordinatorImg}
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className={styles.coordinatorText}>
                  <div>
                    <h3 className={styles.coordinatorName}>
                      {teamMembers[6].name}
                    </h3>
                  </div>
                  <div className={styles.coordinatorContact}>
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
