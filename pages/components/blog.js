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

const Blog = ({ blogs }) => {
  const router = useRouter();
  const { locale } = router;

  if (!blogs || !Array.isArray(blogs)) {
    return <div>No blogs available</div>;
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
              {blogs.map((post) => (
                <div key={post.databaseId} className={styles["blog-container"]}>
                  <div
                    className={styles.blog}
                    style={{
                      backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      objectFit: "cover",
                    }}
                  >
                    <div className={styles["blog-content-container"]}>
                      <div className={styles["blog-content"]}>
                        <p className={styles["blog-content-head"]}>
                          {post.title}
                        </p>
                        <span className={styles.author}>
                          {post.posts.postAuthor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
