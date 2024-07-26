import { useRouter } from "next/router";
import Image from "next/image";
import Slider from "react-slick";

import Container from "../utils/container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import styles from "./news.module.css";
import news1 from "../../public/images/news1.jpg";
import news2 from "../../public/images/news2.jpg";
import news3 from "../../public/images/news3.jpg";
import news4 from "../../public/images/news4.jpg";
import news5 from "../../public/images/news5.jpg";
import news6 from "../../public/images/news6.jpg";

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

const News = () => {
  const router = useRouter();
  const { locale } = router;

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

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <Container>
      <div>
        <div className={styles["head-container"]}>
          <p className={styles["news-head"]}>
            {locale === "sr" ? "Vijesti" : "News"}
          </p>
          <button className={styles["all-news"]}>
            {locale === "sr" ? "sve vijesti" : "all news"}
          </button>
        </div>
        <div>
          <Slider {...settings}>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news1}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>
                      Lorem ipsum dolor sit amen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news2}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>
                      Sed gravida non elit ac vulputate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news3}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>Nunc at feugiat eros</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news4}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>
                      Etiam tellus urna, venenatis non tincidunt vel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news5}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>
                      Etiam tellus urna, venenatis non tincidunt vel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["slide-container"]}>
              <div className={styles.slide}>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["slide-img-container"]}>
                    <Image
                      src={news6}
                      alt="News thumbnail"
                      className={styles["news-img"]}
                    />
                  </div>
                  <div className={styles["slide-content"]}>
                    <p className={styles["slide-head"]}>
                      Etiam tellus urna, venenatis non tincidunt vel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default News;
