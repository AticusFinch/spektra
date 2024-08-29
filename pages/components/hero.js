import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./hero.module.css";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const router = useRouter();
  const { locale } = router;

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const images = [
    "/images/hero/01.jpg",
    "/images/hero/02.jpg",
    "/images/hero/03.jpg",
    "/images/hero/04.jpg",
    "/images/hero/05.jpg",
    "/images/hero/06.jpg",
    "/images/hero/07.jpg",
    "/images/hero/08.jpg",
    "/images/hero/09.jpg",
    "/images/hero/10.jpg",
  ];

  return (
    <div className={styles.home}>
      <motion.div
        className={styles["background-wrapper"]}
        initial={!isSmallScreen ? {} : { opacity: 0 }}
        animate={!isSmallScreen ? {} : { opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles["image-container"]}>
              <Image
                src={image}
                alt="hero"
                width={1920}
                height={1080}
                className={styles.image}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        className={styles.gradient}
        initial={!isSmallScreen ? { y: "100%", opacity: 0 } : { opacity: 0 }}
        animate={!isSmallScreen ? { y: 0, opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <div className={styles["home-container"]}>
        <motion.div
          className={styles.est}
          initial={!isSmallScreen ? { x: "200%" } : { x: 0 }}
          animate={!isSmallScreen ? { x: 0 } : {}}
          transition={!isSmallScreen ? { delay: 0.9, duration: 2 } : {}}
        >
          <span>
            {locale === "sr" ? "osnovana 2017." : "established in 2017"}
          </span>
        </motion.div>
        <motion.div
          className={styles["head-container"]}
          initial={!isSmallScreen ? { x: "200%" } : { x: 0 }}
          animate={!isSmallScreen ? { x: 0 } : {}}
          transition={!isSmallScreen ? { delay: 1.2, duration: 2 } : {}}
        >
          {" "}
          <p className={styles["sub-head"]}>
            {locale === "sr" ? "Asocijacija" : "Association"}
          </p>
          <p className={styles.head}>
            {locale === "sr" ? "Spektra" : "Spectra"}
          </p>
        </motion.div>
        <motion.div
          className={styles["text-container"]}
          initial={!isSmallScreen ? { x: "200%" } : { x: 0 }}
          animate={!isSmallScreen ? { x: 0 } : {}}
          transition={!isSmallScreen ? { delay: 1.5, duration: 2 } : {}}
        >
          <p className={styles.text}>
            {locale === "sr"
              ? "Nevladina organizacija posvećena feminističkom i anifašističkom smjenjivanju opresivnih sistema građenjem solidarnosti, zagovaranjem promjena i njegovanjem učenja."
              : "A non-governmental organization dedicated to feminist and anti-fascist efforts to dismantle oppressive systems through solidarity, advocating for change, and commitment to continuous learning."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
