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
import { GrDownload } from "react-icons/gr";

import { FaPen } from "react-icons/fa";

import styles from "./publications.module.css";

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
    return (
      <p>
        {locale === "sr"
          ? "Publikacije nisu dostupne."
          : "No publication available."}
      </p>
    );
  }

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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
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
          arrows: false,
          autoplay: true,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <Container>
      <div className={styles.publications}>
        <div className={styles["publications-head-container"]}>
          <p className={styles["publications-head"]}>
            {locale === "sr" ? "Publikacije" : "Publications"}
          </p>
          <Link href={"/publications"} className={styles["all-publications"]}>
            {locale === "sr" ? "sve publikacije" : "all publications"}
          </Link>
        </div>
        <div>
          {publications.length > 0 ? (
            <Slider {...settings}>
              {publications.map((post, id) => (
                <div key={id} className={styles["publication-container"]}>
                  <div className={styles["publication-img-container"]}>
                    {post.featuredImage?.node && (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || "Post Image"}
                        width={post.featuredImage.node.mediaDetails.width}
                        height={post.featuredImage.node.mediaDetails.height}
                        className={styles["publication-img"]}
                      />
                    )}
                    <div className={styles["publication-content"]}>
                      <div>
                        <p className={styles["publication-head"]}>
                          {post.title}
                        </p>
                        <span className={styles["author"]}>
                          {/* <FaPen className={styles["meta-icon"]} /> */}
                          {post.publications.publicationAuthor}
                        </span>
                      </div>
                      <div className={styles.download}>
                        <button
                          onClick={(e) => {
                            if (post.publications.file?.node?.link) {
                              window.open(
                                post.publications.file.node.link,
                                "_blank"
                              );
                            }
                          }}
                          className={styles["download-button"]}
                        >
                          <GrDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className={styles.empty}>
              {locale === "sr"
                ? "Trenutno nema novih publikacija. "
                : "Currently there's no publikacija to display. "}
              <FaRegSadCry />
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Publications;
