import React from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styles from "./programs.module.css";

import { IoEnterOutline } from "react-icons/io5";

const Programs = () => {
  const router = useRouter();
  const { locale } = router;

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";
  const websitePageTitle = locale === "sr" ? "Programi" : "Programs";

  return (
    <div>
      <Head>
        <title>{`${websitePageTitle} | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.programs}>
          <div className={styles["programs-head-container"]}>
            <h1 className={styles["programs-head"]}>
              {locale === "sr" ? "PROGRAMI" : "pROGRAMS"}
            </h1>
          </div>
          <div className={styles["programs-content"]}>
            <p className={styles.intro}>
              {locale === "sr"
                ? "Spektra trenutno djeluje kroz 3 programa:"
                : "Spektra currently works through 3 programs:"}
              <b>
                {locale === "sr"
                  ? "Program javnog zagovaranja, program za rad sa zajednicom i feministički program."
                  : "Advocacy program, community work program and feminism program."}
              </b>
            </p>
            <p className={styles.intro}>
              {locale === "sr"
                ? "Ovdje možeš saznati nešto više o ovim programima."
                : "Here you can find out more about these programs."}
            </p>
            <div className={styles["grid-cards-container"]}>
              <Link href="/programs/community" className={styles["grid-card"]}>
                <div className={styles["card-overlay"]}>
                  <IoEnterOutline />
                </div>
                <div className={styles["image-container"]}>
                  <Image
                    src="/images/programs/3.png"
                    width={498}
                    height={292}
                    alt="Community work program"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles["card-head-container"]}>
                    <span className={styles["card-head"]}>
                      {locale === "sr"
                        ? "Program za rad sa zajednicom"
                        : "Community Work Program"}
                    </span>
                  </div>
                  <div className={styles["card-text"]}>
                    <p> {locale === "sr"
                      ? "Program za rad sa zajednicom posvećen je kontinuiranom pružanju direktne pomoći, vršnjačke i psihosocijalne podrške članovima/cama TIRV zajednice, te organizaciji brojnih aktivnosti za zajednicu."
                      : "The Community Work Program is dedicated to the continuous provision of direct assistance, peer and psychosocial support to members of the TIGV community"}
                    </p>
                  </div>
                </div>
                <div className={styles["read-more-container"]}>
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                  <IoEnterOutline />
                </div>
              </Link>
              <Link href="/programs/advocacy" className={styles["grid-card"]}>
                <div className={styles["card-overlay"]}>
                  <IoEnterOutline />
                </div>
                <div className={styles["image-container"]}>
                  <Image
                    src="/images/programs/1.png"
                    width={469}
                    height={313}
                    alt="Advocacy program"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles["card-head-container"]}>
                    <span className={styles["card-head"]}>
                      {locale === "sr"
                        ? "Program zagovaranja"
                        : "Advocacy Program"}
                    </span>
                  </div>
                  <div className={styles["card-text"]}>
                    <p> {locale === "sr"
                      ? "Zagovarački program posvećen je unapređenju pravnog i društvenog statusa transrodnih, rodno-varijantnih i interpolnih osoba u Crnoj Gori, sa trenutnim primarnim fokusom na proces usvajanja Zakona o pravnom prepoznavanju rodnog identiteta na osnovu samoodređenja."
                      : "The Advocacy Program is dedicated to improving the legal and social status of transgender, gender-variant, and intersex people in Montenegro."}
                    </p>
                  </div>
                </div>
                <div className={styles["read-more-container"]}>
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                  <IoEnterOutline />
                </div>
              </Link>
              <Link href="/programs/feminism" className={styles["grid-card"]}>
                <div className={styles["card-overlay"]}>
                  <IoEnterOutline />
                </div>
                <div className={styles["image-container"]}>
                  <Image
                    src="/images/programs/2.png"
                    width={346}
                    height={519}
                    alt="Community work program"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles["card-head-container"]}>
                    <span className={styles["card-head"]}>
                      {locale === "sr"
                        ? "Feministički program"
                        : "Feminism Program"}
                    </span>
                  </div>
                  <div className={styles["card-text"]}>
                    <p> {locale === "sr"
                      ? "Feministički program posvećen je povećanju prisutnosti feminističkih praksi i vrijednosti u crnogorskom društvu primarno kroz organizaciju edukativnih progrmama, te kulturnih i umjetničkih događaja."
                      : "The Feminism Program is dedicated to increasing the presence of feminist practices and values in Montenegrin society, primarily through the organization of educational programs"}
                    </p>
                  </div>
                </div>
                <div className={styles["read-more-container"]}>
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                  <IoEnterOutline />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Programs;
