import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Head from "next/head";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "../utils/container";
import styles from "./[slug].module.css";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import Slider from "react-slick";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

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

const Post = ({ post, latestPosts }) => {
  const router = useRouter();
  const { locale } = router;

  if (!post) {
    return (
      <div>
        {" "}
        {locale === "sr" ? "Blog nije pronađen" : "Blog post not found"}
      </div>
    );
  }

  const dateObj = post && post.date ? new Date(post.date) : null;

  const formattedDate = dateObj
    ? `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
    : "Unknown Date";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Head>
        <title>{`Blog | ${post.title}`}</title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <div className={styles["post-head-container"]}>
        <h1 className={styles["post-head"]}>Blog</h1>
      </div>
      <Container styles={{ backgroundColor: "#efeff0" }}>
        <div className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <div>
            <span className={styles["post-meta"]}>{formattedDate}</span>
            <div className={styles["image-container"]}>
              <Image
                src={post.featuredImage.node.sourceUrl}
                width={post.featuredImage.node.mediaDetails.width}
                height={post.featuredImage.node.mediaDetails.height}
                alt={post.featuredImage.node.altText || "Post head image"}
                className={styles["post-image"]}
              />
            </div>
            <span className={styles["post-meta"]}>
              {post.posts.photoCredits}
            </span>
          </div>
          <div
            className={styles["post-text"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {post.posts.image && (
            <div className={styles["post-image-container"]}>
              <Image
                src={post.posts.image.node.sourceUrl}
                alt={post.posts.image.node.altText || "Post image"}
                width={post.posts.image.node.mediaDetails.width}
                height={post.posts.image.node.mediaDetails.height}
                className={styles["image"]}
              />
            </div>
          )}
          {post.posts.video && (
            <div className={styles["video-container"]}>
              <iframe
                width="560"
                height="315"
                src={post.posts.video}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles["video"]}
              ></iframe>
            </div>
          )}
          {post.posts.gallery && post.posts.gallery.nodes.length > 0 && (
            <div className={styles["gallery-container"]}>
              <Slider {...settings}>
                {post.posts.gallery.nodes.map((image, index) => (
                  <div key={index} className={styles["gallery-item"]}>
                    <Image
                      src={image.sourceUrl}
                      alt={image.altText || `Gallery image ${index + 1}`}
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <span className={styles["post-author"]}>
            <FaPen className={styles["meta-icon"]} />
            {post.posts.postAuthor
              ? post.posts.postAuthor
              : locale === "sr"
              ? "Nepoznat Autor"
              : "Unknown Author"}
          </span>
        </div>

        <div className={styles["read-more-section"]}>
          <h2 className={styles["more-head"]}>
            {locale === "sr" ? "Pročitaj još:" : "Read More:"}
          </h2>
          <div className={styles["more-container"]}>
            {latestPosts.map((post) => (
              <div key={post.databaseId} className={styles.more}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles["more-post"]}
                >
                  <div className={styles["more-image-container"]}>
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || "Post Image"}
                      width={post.featuredImage.node.mediaDetails.width}
                      height={post.featuredImage.node.mediaDetails.height}
                      className={styles["more-image"]}
                    />
                  </div>
                  <div className={styles["more-content"]}>
                    <h3 className={styles["more-title"]}>{post.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params, query, locale }) {
  const language = query.lang || "sr";
  const GET_POST = gql`
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
        databaseId
        title
        date
        slug
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              width
              height
            }
            sourceUrl
          }
        }
        posts {
          photoCredits
          postAuthor
          video
          gallery {
            nodes {
              sourceUrl
              mediaDetails {
                width
                height
              }
              altText
            }
          }
          image {
            node {
              sourceUrl
              mediaDetails {
                width
                height
              }
              altText
            }
          }
        }
      }
    }
  `;

  const GET_LATEST_POSTS = gql`
    query GetLatestPosts($notIn: [ID], $language: LanguageCodeFilterEnum!) {
      posts(
        where: {
          notIn: $notIn
          orderby: { field: DATE, order: DESC }
          language: $language
        }
        first: 6
      ) {
        edges {
          node {
            databaseId
            title
            date
            slug
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data: postData } = await client.query({
    query: GET_POST,
    variables: { slug: params.slug },
  });

  const notIn = postData.postBy ? [postData.postBy.databaseId] : [];

  const { data: latestPostsData } = await client.query({
    query: GET_LATEST_POSTS,
    variables: { notIn: notIn, language: locale.toUpperCase() },
  });

  return {
    props: {
      post: postData.postBy || null,
      latestPosts: latestPostsData.posts.edges.map((edge) => edge.node),
    },
  };
}

export default Post;
