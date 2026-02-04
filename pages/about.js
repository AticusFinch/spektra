import React from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import styles from "./about.module.css";

import { PiSuitcaseSimple, PiShootingStar } from "react-icons/pi";
import { IoSunnyOutline, IoNewspaperOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { IoEnterOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

const About = () => {
  const router = useRouter();
  const { locale } = router;

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";
  const websitePageTitle = locale === "sr" ? "O nama" : "O nama";
  return (
    <div>
      <Head>
        <title>{`${websitePageTitle} | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.about}>
          <div className={styles["about-head-container"]}>
            <h1 className={styles["about-head"]}>
              {locale === "sr" ? "O NAMA" : "ABOUT US"}
            </h1>
          </div>
          <div className={styles["about-content"]}>
            <div className={styles["grid-cards-container"]}>
              <Link href="/whatWeDo" className={styles["grid-card"]}>
                <div className={styles.icons}>
                  <PiSuitcaseSimple className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr" ? "Čime se bavimo?" : "What we do?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p> {locale === "sr"
                    ? "Nevladina organizacija posvećena feminističkom i anifašističkom smjenjivanju opresivnih sistema građenjem solidarnosti, zagovaranjem promjena i njegovanjem učenja."
                    : "Non-governmental organization dedicated to the feminist and anti-fascist dismantling of oppressive systems by building solidarity, advocating for change, and nurturing learning."}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>

              <Link href="/ourTeam" className={styles["grid-card"]}>
                <div className={styles.icons}>
                  <AiOutlineTeam className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr"
                      ? "Ko čini naš tim?"
                      : "Who is part of our team?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p> {locale === "sr"
                    ? "Ovo su članice i članovi našeg tima!"
                    : "Here are the members of our team!"}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link href="/whoSupportsOurWork" className={styles["grid-card"]}>
                <div className={styles.icons}>
                  <HiOutlineSupport className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr"
                      ? "Ko podržava naš rad?"
                      : "Who supports our work?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p> {locale === "sr"
                    ? "Tokom godina djelovanja imali smo priliku da sarađujemo sa brojnim lokalnim i svjetskim donatorima, te vam sa zadovoljstvom predstavljamo sve organizacije i institucije koje su do sada podržale rad Asocijacije Spektra."
                    : "Throughout the years of operation, we had the opportunity to collaborate with numerous local and international donors; therefore, we are pleased to present all the organizations and institutions that have supported our work at Asocijacija Spektra."}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link href="/reports" className={styles["grid-card"]}>
                <div className={styles.icons}>
                  <IoNewspaperOutline className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr" ? "Naši izvještaji" : "Our reports"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p> {locale === "sr"
                    ? "Ovdje možete pronaći naše finansijske i godišnje izvještaje."
                    : "Here you can find our financial and annual reports"}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link href="/contact" className={styles["grid-card"]}>
                <div className={styles.icons}>
                  <AiOutlineMessage className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr" ? "Kontakt" : "Contact"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p> {locale === "sr"
                    ? "Imate pitanja, sugestije ili želite da sarađujemo? Slobodno nam se obratite!"
                    : "Do you have questions, suggestions, or wish to collaborate? Feel free to reach out!"}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
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

export default About;
