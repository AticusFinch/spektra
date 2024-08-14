import { useRouter } from "next/router";

import { GoDotFill } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-top-left"]}>
          <div className={styles["footer-top-address"]}>
            <p className={styles["footer-top-address-street"]}>
              ULICA SLOBODE 4
            </p>
            <p className={styles["footer-top-address-city"]}>
              {locale === "sr"
                ? "PODGORICA, CRNA GORA"
                : "PODGORICA, MONTENEGRO"}
            </p>
          </div>
          <div className={styles["footer-top-search"]}>
            <button className={styles["search-button"]}>
              <HiMagnifyingGlass />
            </button>
            <input
              type="text"
              placeholder={locale === "sr" ? "pretraga" : "search"}
              className={styles["search-input"]}
            />
          </div>
          <div className={styles.signature}>
            Created by Kaizen © {new Date().getFullYear()}
          </div>
        </div>
        <div className={styles["footer-top-center"]}>
          <span className={styles["footer-top-center-head"]}>
            {locale === "sr" ? "ZAPRATI NAS" : "FOLLOW US"}
          </span>
          <div className={styles["footer-top-center-social"]}>
            <a
              href="https://www.facebook.com/asocijacija.spektra"
              target="_blank"
              rel="noreferrer"
              className={styles["footer-top-center-icon"]}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/asocijacija.spektra/"
              target="_blank"
              rel="noreferrer"
              className={styles["footer-top-center-icon"]}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@asocijacijaspektra"
              target="_blank"
              rel="noreferrer"
              className={styles["footer-top-center-icon"]}
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com/nvospektra?lang=en"
              target="_blank"
              rel="noreferrer"
              className={styles["footer-top-center-icon"]}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/c/AsocijacijaSpektra"
              target="_blank"
              rel="noreferrer"
              className={styles["footer-top-center-icon"]}
            >
              <TbBrandYoutubeFilled />
            </a>
          </div>
        </div>
        <div className={styles["footer-top-right"]}>
          <span className={styles["footer-top-right-head"]}>KONTAKT</span>
          <div className={styles["footer-top-right-contact-info"]}>
            <p className={styles["footer-top-right-contact-info-phone"]}>
              +382 67 135 205
            </p>
            <p className={styles["footer-top-right-contact-info-working-time"]}>
              {locale === "sr" ? "09h - 16h" : "09am - 04pm"}
            </p>
            <p className={styles["footer-top-right-contact-info-email"]}>
              asocijacija.spektra@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-bottom-links"]}>
          <Link href="/about" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "O NAMA" : "ABOUT"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/programs" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "PROGRAMI" : "PROGRAMS"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/news" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "VIJESTI" : "NEWS"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/blog" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "BLOG" : "BLOG"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/publications" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "PUBLIKACIJE" : "PUBLICATIONS"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/rights" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "ZNAJ SVOJA PRAVA" : "KNOW YOUR RIGHTS"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/report" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "PRIJAVI NASILJE" : "REPORT VIOLENCE"}
          </Link>
          <GoDotFill className={styles.dot} />
          <Link href="/donate" className={styles["footer-bottom-link"]}>
            {locale === "sr" ? "DONIRAJ" : "DONATE"}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
