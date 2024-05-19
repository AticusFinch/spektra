import { useRouter } from "next/router";

import styles from "./hero.module.css";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: `url(/images/testph.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "11rem",
      }}
    >
      <p className={styles.index}>
        {locale === "sr" ? "Asocijacija Spektra" : "Association Spectra"}
      </p>
      <div className={styles["quote-container"]}>
        <span className={styles["quote-icon-left"]}>” </span>
        <p className={styles.quote}>
          {locale === "sr"
            ? "Oni koji su preživjeli nezamislivo su i oni koji znaju kako da stvore bolji svijet – jer je naš već jednom bio završen."
            : "Those who have survived the unthinkable are also those who know how to create a better world – because it’s ended for us before."}
        </p>
        <span className={styles["quote-icon-right"]}>”</span>
      </div>
    </div>
  );
};

export default Hero;
