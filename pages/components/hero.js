import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./hero.module.css";

const Hero = () => {
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
      <div className={styles["background-wrapper"]}>
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
      </div>
      <div className={styles.gradient}></div>
      <div className={styles["home-container"]}>
        <div className={styles.est}>
          <span>
            {locale === "sr" ? "osnovana 2017." : "established in 2017"}
          </span>
        </div>
        <div className={styles["head-container"]}>
          {" "}
          <p className={styles["sub-head"]}>
            {locale === "sr" ? "Asocijacija" : "Association"}
          </p>
          <p className={styles.head}>
            {locale === "sr" ? "Spektra" : "Spectra"}
          </p>
        </div>
        <div className={styles["text-container"]}>
          <p className={styles.text}>
            {locale === "sr"
              ? "Nevladina organizacija posvećena feminističkom i anifašističkom smjenjivanju opresivnih sistema građenjem solidarnosti, zagovaranjem promjena i njegovanjem učenja."
              : "A non-governmental organization dedicated to feminist and anti-fascist efforts to dismantle oppressive systems through solidarity, advocating for change, and commitment to continuous learning."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
