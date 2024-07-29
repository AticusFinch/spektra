import { useRouter } from "next/router";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import Container from "../utils/container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";

import styles from "./news.module.css";

const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <MdArrowForwardIos />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <MdArrowBackIosNew />
  </div>
);

const Publications = ({ publications }) => {
  const router = useRouter();
  const { locale } = router;

  if (!publications || !Array.isArray(publications)) {
    return <div>No posts available</div>;
  }

  // Debugging: Log the publications data
  console.log("Publications data:", publications);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Publications;
