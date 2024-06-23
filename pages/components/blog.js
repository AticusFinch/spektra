import { useRouter } from "next/router";
import Image from "next/image";
import Slider from "react-slick";

import Container from "../utils/container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import styles from "./blog.module.css";

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

const Blog = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className={styles.flex}>
        <div>
          <div className={styles["blog-head-container"]}>
            <h1 className={styles["blog-head"]}>Blog</h1>
            <button className={styles["all-blogs"]}>
              {locale === "sr" ? "svi blogovi" : "all blogs"}
            </button>
          </div>
          <div>
            <Slider {...settings}>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog1.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Lorem ipsum dolor sit amen
                      </p>
                      <span className={styles.author}>Marija Jovanovic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog2.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Sed gravida non elit ac vulputate
                      </p>
                      <span className={styles.author}>Jovan Ulicevic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog3.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Nunc at feugiat eros
                      </p>
                      <span className={styles.author}>Iskra Djurovic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog4.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Etiam tellus urna, venenatis non tincidunt vel
                      </p>
                      <span className={styles.author}>Aleksa Radonjic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog5.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Maecenas purus ante, iaculis ut dolor eleifend
                      </p>
                      <span className={styles.author}>Teodor Stojanovic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["blog-container"]}>
                <div
                  className={styles.blog}
                  style={{
                    backgroundImage: `url(/images/blog6.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "cover",
                  }}
                >
                  <div className={styles["blog-content-container"]}>
                    <div className={styles["blog-content"]}>
                      <p className={styles["blog-content-head"]}>
                        Vestibulum faucibus, libero eget ullamcorper
                      </p>
                      <span className={styles.author}>Ida Markovic</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
