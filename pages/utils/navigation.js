import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { HiMagnifyingGlass } from "react-icons/hi2";

import logo from "../../public/logo/spektra-logo.png";

import styles from "./navigation.module.css";

const Navigation = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles["nav-container"]} ${
        isScrolled ? styles["nav-container-scrolled"] : ""
      }`}
    >
      <div className={styles.navigation}>
        <div
          className={`${styles["nav-top"]} ${
            isScrolled ? styles["nav-top-scrolled"] : ""
          }`}
        >
          <div className={styles["languages-container"]}>
            <ul className={styles.languages}>
              <li className={styles["language-container"]}>
                <Link
                  href="/"
                  locale="sr"
                  className={
                    router.locale === "sr"
                      ? `${styles.language} ${styles.active}`
                      : styles.language
                  }
                >
                  MNE
                </Link>
              </li>
              <li className={styles["language-container"]}>
                <Link
                  href="/"
                  locale="en"
                  className={
                    router.locale === "en"
                      ? `${styles.language} ${styles.active}`
                      : styles.language
                  }
                >
                  ENG
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className={styles["logo-container"]}>
            <Image
              src={logo}
              alt="Spektra logo"
              className={`${styles.logo} ${
                isScrolled ? styles["logo-scrolled"] : ""
              }`}
            />
          </Link>
          <div className={styles["nav-search"]}>
            <button className={styles["search-button"]}>
              <HiMagnifyingGlass />
            </button>
            <input
              type="text"
              placeholder="pretraga"
              className={styles["search-input"]}
            />
          </div>
        </div>
        <div className={styles["nav-bottom"]}>
          <div
            className={`${styles["logo-link-container"]} ${
              isScrolled ? styles["logo-link-scrolled"] : ""
            }`}
          >
            <Link href="/" className={styles["logo-links-container"]}>
              <Image
                src={logo}
                alt="Spektra logo"
                className={styles["logo-links"]}
              />
            </Link>
          </div>
          <ul
            className={`${styles.links} ${
              isScrolled ? styles["links-scrolled"] : ""
            }`}
          >
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                O NAMA
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                PROGRAMI
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                VIJESTI
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                BLOG
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                PUBLIKACIJE
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                ZNAJ SVOJA
                <br />
                PRAVA
              </Link>
            </li>
            <li className={styles["link-container"]}>
              <Link href="/" className={styles.link}>
                PRIJAVI
                <br /> NASILJE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
