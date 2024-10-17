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
            <p className={styles.intro}>
              Quisque at efficitur massa, ac aliquam est. Suspendisse sodales
              sollicitudin maximus. Nunc ut augue ac libero efficitur facilisis
              ac in nunc. Vestibulum lacus urna, volutpat ut ante id, sodales
              placerat urna. Fusce gravida, ante quis tempus venenatis, elit
              diam luctus purus, sed bibendum nisi magna non lectus. Nunc
              lacinia luctus turpis, a fringilla metus. Suspendisse a tempor
              nibh. Maecenas eu eros vel augue feugiat feugiat at sit amet odio.
              Aenean feugiat dapibus luctus.
            </p>
            <p className={styles.intro}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam tortor ligula, quis luctus nunc eleifend id. In hac
              habitasse platea dictumst. Aliquam iaculis lectus a leo varius,
              eget dapibus metus efficitur. Etiam mi neque, venenatis
              condimentum rutrum id, imperdiet nec orci. Donec in arcu dolor.
              Pellentesque non nisi nulla. Donec accumsan quis arcu non
              vestibulum. Nunc velit risus, aliquam nec nibh id, ultrices
              dignissim sapien. Donec ultrices, nisi et ultricies molestie,
              augue turpis aliquam lorem, sit amet varius elit arcu id elit.
              Maecenas viverra lacinia dictum. Vestibulum sagittis sed eros
              vitae vehicula.
            </p>
            <div className={styles["grid-cards-container"]}>
              <Link
                href={locale === "sr" ? "/cime-se-bavimo" : "/what-we-do"}
                className={styles["grid-card"]}
              >
                <div className={styles.icons}>
                  <PiSuitcaseSimple className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr" ? "Čime se bavimo?" : "What we do?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? "/koja-je-nasa-misija"
                    : "/what-is-our-mission"
                }
                className={styles["grid-card"]}
              >
                <div className={styles.icons}>
                  <IoSunnyOutline className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr"
                      ? "Koja je naša misija?"
                      : "What is our mission?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? "/koja-je-nasa-vizija"
                    : "/what-is-our-vission"
                }
                className={styles["grid-card"]}
              >
                <div className={styles.icons}>
                  <PiShootingStar className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr"
                      ? "Koja je naša vizija?"
                      : "What is our vision?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? "/koje-su-nase-vrijednosti"
                    : "/what-are-our-values"
                }
                className={styles["grid-card"]}
              >
                <div className={styles.icons}>
                  <GoHeart className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr"
                      ? "Koje su naše vrijednosti?"
                      : "What are our values?"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? "/ko-cini-nas-tim"
                    : "/who-is-part-of-our-team"
                }
                className={styles["grid-card"]}
              >
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? "/ko-podrzava-nas-rad"
                    : "/who-supports-our-work"
                }
                className={styles["grid-card"]}
              >
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
                  </p>
                </div>
                <div className={styles["read-more-container"]}>
                  <IoEnterOutline />
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                </div>
              </Link>
              <Link
                href={locale === "sr" ? "/nasi-izvjestaji" : "/our-reports"}
                className={styles["grid-card"]}
              >
                <div className={styles.icons}>
                  <IoNewspaperOutline className={styles.icon} />
                </div>
                <div className={styles["card-head-container"]}>
                  <span className={styles["card-head"]}>
                    {locale === "sr" ? "Naši izvještaji" : "Our reports"}
                  </span>
                </div>
                <div className={styles["card-text"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquam tortor ligula, quis luctus nunc eleifend id.
                    In hac habitasse platea dictumst. Aliquam iaculis lectus a
                    leo varius, eget dapibus metus efficitur. Etiam mi neque,
                    venenatis condimentum rutrum id, imperdiet nec orci. Donec
                    in arcu dolor. Pellentesque non nisi nulla. Donec accumsan
                    quis arcu non vestibulum.{" "}
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
