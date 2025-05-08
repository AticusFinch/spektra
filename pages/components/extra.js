import { useState, useEffect } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "./extra.module.css";

const Extra = () => {
  const router = useRouter();
  const { locale } = router;
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setViewPortEntered(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["extra-container"]}>
      <div className={styles.extra}>
        <div className={styles["counter-container"]}>
          <div className={styles.counter}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={viewPortEntered ? 0 : null}
                end={50}
                duration={3}
                className={styles["counter-number-blue"]}
              />
            </VisibilitySensor>
            <span className={styles["counter-text"]}>
              {locale === "sr"
                ? "implementiranih projekata"
                : "implemented projects"}
            </span>
          </div>
          <div className={styles.counter}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={viewPortEntered ? 0 : null}
                end={68}
                duration={3}
                className={styles["counter-number-pink"]}
              />
            </VisibilitySensor>
            <span className={styles["counter-text"]}>
              {locale === "sr"
                ? "izradjenih publikacija"
                : "published publications"}
            </span>
          </div>
          <div className={styles.counter}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={viewPortEntered ? 0 : null}
                end={6}
                duration={3}
                className={styles["counter-number-white"]}
              />
            </VisibilitySensor>
            <span className={styles["counter-text"]}>
              {" "}
              {locale === "sr" ? "godina postojanja" : "published publications"}
            </span>
          </div>
          <div className={styles.counter}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={viewPortEntered ? 0 : null}
                end={30}
                duration={3}
                className={styles["counter-number-pink"]}
              />
            </VisibilitySensor>
            <span className={styles["counter-text"]}>
              {locale === "sr" ? "aktivnih članova" : "active members"}
            </span>
          </div>
          <div className={styles.counter}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={viewPortEntered ? 0 : null}
                end={89}
                duration={3}
                className={styles["counter-number-blue"]}
              />
            </VisibilitySensor>
            <span className={styles["counter-text"]}>
              {locale === "sr" ? "lorem ipsum" : "sit amet"}
            </span>
          </div>
        </div>
        <div
          className={styles["donate-container"]}
          style={{
            backgroundImage: `url(/images/hero/04.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles["donate-overlay"]}>
            <motion.a
              href="/"
              className={styles["donate-text"]}
              whileHover={!isSmallScreen ? { scale: 1.1 } : { scale: 1 }}
            >
              {locale === "sr" ? "merch" : "merch"}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
