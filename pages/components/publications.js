import { useRouter } from "next/router";
import Slider from "react-slick";

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

const Publications = () => {
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
        },
      },
    ],
  };

  return (
    <Container>
      <div>
        <div className={styles["publications-head-container"]}>
          <h1 className={styles["publications-head"]}>
            {locale === "sr" ? "Publikacije" : "Publications"}
          </h1>
          <button className={styles["all-publications"]}>
            {locale === "sr" ? "sve publikacije" : "all publications"}
          </button>
        </div>
        <div>
          <Slider {...settings}>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi1.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Lorem ipsum dolor sit amen
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi2.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Sed gravida non elit ac vulputate
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi3.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Nunc at feugiat eros
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi4.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Etiam tellus urna, venenatis non tincidunt vel
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi5.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Maecenas purus ante, iaculis ut dolor eleifend
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["publication-container"]}>
              <div className={styles.publication}>
                <div
                  className={styles["publication-img-container"]}
                  style={{
                    backgroundImage: `url(/images/publi6.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["publication-content"]}>
                    <div className={styles["publication-head-container"]}>
                      <p className={styles["publication-head"]}>
                        Vestibulum faucibus, libero eget ullamcorper
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                    <button className={styles["publication-download-btn"]}>
                      <AiOutlineDownload
                        className={styles["publication-download-icon"]}
                      />{" "}
                      {locale === "sr" ? "preuzmi" : "download"}
                    </button>
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

export default Publications;
