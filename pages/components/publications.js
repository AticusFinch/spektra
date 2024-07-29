import { useRouter } from "next/router";
import Slider from "react-slick";
import Link from "next/link";

import Container from "../utils/container";

import styles from "./publications.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
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
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  function handleButtonClick(url) {
    window.open(url, "_blank");
  }

  return (
    <Container>
      <div>
        <div className={styles["publications-head-container"]}>
          <h1 className={styles["publications-head"]}>
            {locale === "sr" ? "Publikacije" : "Publications"}
          </h1>
          <Link className={styles["all-publications"]} href="/publications">
            {locale === "sr" ? "sve publikacije" : "all publications"}
          </Link>
        </div>
        <div>
          <Slider {...settings}>
            {Array.isArray(publications) &&
              publications.map((post) => (
                <div key={post.id} className={styles["publication-container"]}>
                  <div className={styles.publication}>
                    <div
                      className={styles["publication-img-container"]}
                      style={{
                        backgroundImage: `url(${
                          post.featuredImage?.node?.sourceUrl || ""
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        objectFit: "cover",
                      }}
                    >
                      <div className={styles["publication-content"]}>
                        <div className={styles["publication-head-container"]}>
                          <p className={styles["publication-head"]}>
                            {post.title}
                          </p>
                          <span className={styles.author}>
                            {post.publications.publicationAuthor}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            handleButtonClick(
                              post.publications?.file?.node?.link || "#"
                            )
                          }
                          className={styles["publication-download-btn"]}
                        >
                          <span className={styles["download-text"]}>
                            {locale === "sr" ? "preuzmi" : "download"}
                          </span>
                          <AiOutlineDownload
                            className={styles["publication-download-icon"]}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Publications;
