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

const News = ({ news }) => {
  const router = useRouter();
  const { locale } = router;

  if (!news || !Array.isArray(news)) {
    return <div>No posts available</div>;
  }

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
          slidesToShow: 2,
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
          arrows: false,
          autoplay: true,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <Container>
      <div>
        <div className={styles["head-container"]}>
          <p className={styles["news-head"]}>
            {locale === "sr" ? "Vijesti" : "News"}
          </p>
          <Link href={"/news"} className={styles["all-news"]}>
            {locale === "sr" ? "sve vijesti" : "all news"}
          </Link>
        </div>
        <div>
          {news.length > 0 ? (
            <Slider {...settings}>
              {news.map((post) => (
                <div key={post.id} className={styles["slide-container"]}>
                  <Link href={`/news/${post.slug}`} className={styles.link}>
                    <div className={styles.slide}>
                      <div className={styles["slide-content-container"]}>
                        {" "}
                        <div className={styles["slide-img-container"]}>
                          <Image
                            src={
                              post.featuredImage?.node?.sourceUrl ||
                              "/path/to/default/image.jpg"
                            }
                            alt={
                              post.featuredImage?.node?.altText || "Post Image"
                            }
                            width={
                              post.featuredImage?.node?.mediaDetails?.width ||
                              700
                            }
                            height={
                              post.featuredImage?.node?.mediaDetails?.height ||
                              400
                            }
                            className={styles["news-img"]}
                          />
                        </div>
                        <div className={styles["slide-content"]}>
                          <p className={styles["slide-head"]}>{post.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <p className={styles.empty}>
              {locale === "sr"
                ? "Trenutno nema novih vijesti. "
                : "Currently there's no news to display. "}
              <FaRegSadCry />
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default News;
