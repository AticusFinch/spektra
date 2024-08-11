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
              <Link href="/programs_pages/" className={styles["grid-card"]}>
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
                        : "Community work program"}
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
                </div>
                <div className={styles["read-more-container"]}>
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                  <IoEnterOutline />
                </div>
              </Link>
              <Link href="/programs_pages/" className={styles["grid-card"]}>
                <div className={styles["card-overlay"]}>
                  <IoEnterOutline />
                </div>
                <div className={styles["image-container"]}>
                  <Image
                    src="/images/programs/1.png"
                    width={469}
                    height={313}
                    alt="Community work program"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles["card-head-container"]}>
                    <span className={styles["card-head"]}>
                      {locale === "sr"
                        ? "Program zagovaranja"
                        : "Advocacy program"}
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
                </div>
                <div className={styles["read-more-container"]}>
                  <span className={styles["read-more"]}>
                    {locale === "sr" ? "saznaj više" : "read more"}
                  </span>
                  <IoEnterOutline />
                </div>
              </Link>
              <Link href="/programs_pages/" className={styles["grid-card"]}>
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
                        : "Feminism program"}
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
