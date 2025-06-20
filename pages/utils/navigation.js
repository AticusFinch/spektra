import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, useCycle, AnimatePresence, delay } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Search from "../components/search";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import logo from "../../public/logo/spektra-logo.png";

import styles from "./navigation.module.css";

const Navigation = () => {
  const router = useRouter();
  const { locale } = router;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [animation, cycleAnimation] = useCycle({ rotate: 0 }, { rotate: 360 });

  const menuVariants = {
    openLink: { x: 0, transition: { duration: 0.5, delay: 0.4 } },
    closedLink: { x: "-100%", transition: { duration: 0.3 } },
  };

  const backVariants = {
    openBack: {
      height: [0, "100vh"],
      transition: {
        type: "keyframes",
        duration: 1,
        ease: "easeOut",
      },
    },
    closedBack: {
      height: ["100vh", 0],
      transition: {
        type: "keyframes",
        duration: 0.5,
        ease: "easeIn",
        delay: 0.2,
      },
    },
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    cycleAnimation();
  };

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

  useEffect(() => {
    if (isMenuVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuVisible]);

  return (
    <>
      <div className={styles["mobile-nav"]}>
        <div className={styles["mobile-head-container"]}>
          <Link href="/" className={styles["logo-mobile-container"]}>
            <Image
              src={logo}
              alt="Spektra logo"
              className={styles["logo-mobile"]}
            />
          </Link>
          <button onClick={toggleMenu} className={styles["menu-button"]}>
            <motion.div animate={animation} transition={{ duration: 0.5 }}>
              {isMenuVisible ? <IoMdClose /> : <RxHamburgerMenu />}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuVisible && (
            <motion.div
              className={styles["hamburger-menu-container"]}
              initial="closedBack"
              animate="openBack"
              exit="closedBack"
              variants={backVariants}
            >
              <motion.ul
                className={styles["hamburger-menu"]}
                initial="closedLink"
                animate="openLink"
                exit="closedLink"
                variants={menuVariants}
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
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/about" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "O NAMA" : "ABOUT"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/programs" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "PROGRAMI" : "PROGRAMS"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/news" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "VIJESTI" : "NEWS"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/blog" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "BLOG" : "BLOG"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link
                    href="/publications"
                    className={styles["hamburger-link"]}
                  >
                    {locale === "sr" ? "PUBLIKACIJE" : "PUBLICATIONS"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/rights" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "ZNAJ SVOJA PRAVA" : "KNOW YOUR RIGHTS"}
                  </Link>
                </li>
                <li className={styles["hamburger-link-container"]}>
                  <Link href="/report" className={styles["hamburger-link"]}>
                    {locale === "sr" ? "PODRŠKA" : "SUPPORT"}
                  </Link>
                </li>
                <div className={styles["mobile-search"]}>
                  <Search
                    placeholder={locale === "sr" ? "pretraga" : "search"}
                  />
                </div>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
              {" "}
              <Search placeholder={locale === "sr" ? "pretraga" : "search"} />
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
                <Link href="/about" className={styles.link}>
                  {locale === "sr" ? "O NAMA" : "ABOUT"}
                </Link>
                <div className={styles["dropdown-container"]}>
                  <ul className={styles["dropdown"]}>
                    <li>
                      <Link href="/whatWeDo">
                        {locale === "sr" ? "Čime se bavimo?" : "What we do?"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/ourTeam">
                        {locale === "sr"
                          ? "Ko čini naš tim?"
                          : "Who is part of our team?"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/whoSupportsOurWork">
                        {locale === "sr"
                          ? "Ko podržava naš rad?"
                          : "Who supports our work?"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/reports">
                        {locale === "sr" ? "Naši izvještaji" : "Our reports"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        {locale === "sr" ? "Kontakt" : "Contact"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/programs" className={styles.link}>
                  {locale === "sr" ? "PROGRAMI" : "PROGRAMS"}
                </Link>
                <div className={styles["dropdown-container"]}>
                  <ul className={styles["dropdown"]}>
                    <li>
                      <Link href="/programs/community">
                        {locale === "sr"
                          ? "Program za rad sa zajednicom"
                          : "Community work program"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/advocacy">
                        {locale === "sr"
                          ? "Program zagovaranja"
                          : "Advocacy program"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/feminism">
                        {locale === "sr"
                          ? "Feministički program"
                          : "Feminism program"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/news" className={styles.link}>
                  {locale === "sr" ? "VIJESTI" : "NEWS"}
                </Link>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/blog" className={styles.link}>
                  {locale === "sr" ? "BLOG" : "BLOG"}
                </Link>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/publications" className={styles.link}>
                  {locale === "sr" ? "PUBLIKACIJE" : "PUBLICATIONS"}
                </Link>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/rights" className={styles.link}>
                  {locale === "sr" ? "ZNAJ SVOJA PRAVA" : "KNOW YOUR RIGHTS"}
                </Link>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/report" className={styles.link}>
                  {locale === "sr" ? "PODRŠKA" : "SUPPORT"}
                </Link>
              </li>
              <li className={styles["link-container"]}>
                <Link href="/merch" className={styles.link}>
                  MERCH
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
