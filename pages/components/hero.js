import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;

  const images = {
    hero1: "/images/hero/1.png",
    hero2: "/images/hero/3.png",
    hero3: "/images/hero/4.png",
    hero4: "/images/hero/5.png",
    hero5: "/images/hero/6.png",
    hero6: "/images/hero/7.png",
    hero7: "/images/hero/8.png",
    hero8: "/images/hero/9.png",
    hero9: "/images/hero/10.png",
  };

  const quotes_sr = {
    quoteSr1: "/images/hero/desktop/sr/1.png",
    quoteSr2: "/images/hero/desktop/sr/2.png",
    quoteSr3: "/images/hero/desktop/sr/3.png",
    quoteSr4: "/images/hero/desktop/sr/4.png",
    quoteSr5: "/images/hero/desktop/sr/5.png",
    quoteSr6: "/images/hero/desktop/sr/6.png",
    quoteSr7: "/images/hero/desktop/sr/7.png",
    quoteSr8: "/images/hero/desktop/sr/8.png",
    quoteSr9: "/images/hero/desktop/sr/9.png",
    quoteSr10: "/images/hero/desktop/sr/10.png",
  };

  const quotes_en = {
    quoteEn1: "/images/hero/desktop/en/1.png",
    quoteEn2: "/images/hero/desktop/en/2.png",
    quoteEn3: "/images/hero/desktop/en/3.png",
    quoteEn4: "/images/hero/desktop/en/4.png",
    quoteEn5: "/images/hero/desktop/en/5.png",
    quoteEn6: "/images/hero/desktop/en/6.png",
    quoteEn7: "/images/hero/desktop/en/7.png",
    quoteEn8: "/images/hero/desktop/en/8.png",
    quoteEn9: "/images/hero/desktop/en/9.png",
    quoteEn10: "/images/hero/desktop/en/10.png",
  };

  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: `url(${
          images[`hero${Math.floor(Math.random() * 9) + 1}`]
        })`,
      }}
    >
      <div className={styles["home-container"]}>
        <div className={styles.logo}>
          <Image
            src="/logo/spektra-logo.png"
            alt="Logo Spektra"
            width={567}
            height={567}
            layout="responsive"
          />
        </div>
        <p className={styles.index}>
          {locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"}
        </p>
        <div className={styles["quote-container"]}>
          <Image
            src="/images/hero/NAVODNICI.png"
            alt="Quote Mark"
            width={300}
            height={300}
            layout="responsive"
            className={styles["quote-mark"]}
          />
          <Image
            src={
              locale === "sr"
                ? quotes_sr[`quoteSr${Math.floor(Math.random() * 10) + 1}`]
                : quotes_en[`quoteEn${Math.floor(Math.random() * 10) + 1}`]
            }
            alt="Quote"
            width={300}
            height={300}
            layout="responsive"
            className={styles.quote}
          />
          <Image
            src="/images/hero/NAVODNICI.png"
            alt="Quote Mark"
            width={300}
            height={300}
            layout="responsive"
            className={styles["quote-mark"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
