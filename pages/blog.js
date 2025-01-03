import { useState, useEffect } from "react";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Container from "./utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./blog.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

import Link from "next/link";

import { FaRegSadCry } from "react-icons/fa";

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(new Date(dateString));
};

const POSTS_PER_PAGE = 13;

const Blog = (props) => {
  const { posts } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();
  const { locale } = router;

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(start, end);

  useEffect(() => {
    const newTotalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    setTotalPages(newTotalPages);

    if (currentPage > newTotalPages) {
      setCurrentPage(1);
    }
  }, [filteredPosts, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <div>
      <Head>
        <title>{`Blog | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.blog}>
          <div className={styles.headline}>
            <h1 className={styles["blog-head"]}>
              {locale === "sr" ? "Blog" : "Blog"}
            </h1>
            <div className={styles["blog-search"]}>
              <button className={styles["search-button"]}>
                <HiMagnifyingGlass />
              </button>
              <input
                type="text"
                placeholder={locale === "sr" ? "pretraži blog" : "search blog"}
                className={styles["search-input"]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "anticipate", duration: 0.3 }}
            className={`${styles["blog-container"]} ${
              displayedPosts.length === 0 ? styles.empty : ""
            }`}
          >
            {displayedPosts.length > 0 ? (
              displayedPosts.map((post, databaseId) => (
                <div key={databaseId} className={styles.post}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles["post-link"]}
                  >
                    <div className={styles["post-image-container"]}>
                      {post.featuredImage && post.featuredImage.node ? (
                        <Image
                          src={post.featuredImage.node.sourceUrl}
                          width={post.featuredImage.node.mediaDetails.width}
                          height={post.featuredImage.node.mediaDetails.height}
                          alt={post.featuredImage.node.altText || "Post image"}
                          className={styles["post-image"]}
                        />
                      ) : (
                        <p className={styles["no-image"]}>
                          {locale === "sr"
                            ? "Fotografija nije dostupna. "
                            : "Photo not available. "}
                          <FaRegSadCry />
                        </p>
                      )}
                    </div>
                    <div className={styles.content}>
                      <div className={post.text}>
                        <span
                          className={`${styles["post-meta"]} ${styles.date}`}
                        >
                          <FiClock className={styles["meta-icon"]} />
                          {formatDate(post.date)}
                        </span>
                        <h3 className={styles.title} lang="en">
                          {post.title}
                        </h3>
                        <p
                          className={styles.excerpt}
                          dangerouslySetInnerHTML={{
                            __html: post.content,
                          }}
                        ></p>
                      </div>
                      <div className={styles["post-footer"]}>
                        <span className={styles["post-meta"]}>
                          <FaRegCircleUser className={styles["meta-icon"]} />
                          {post.posts.postAuthor ||
                            (locale === "sr"
                              ? "Nepoznat Autor"
                              : "Unknown Author")}{" "}
                        </span>

                        <div class name={styles.categories}>
                          {post.categories.nodes.map((category) => (
                            <span
                              key={category.name}
                              className={styles.category}
                            >
                              {category.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles["no-posts"]}>
                {locale === "sr"
                  ? "Nema članaka za prikaz. "
                  : "No posts to display. "}
                <FaRegSadCry />
              </div>
            )}
          </motion.div>
          {displayedPosts.length > 0 && (
            <div className={styles.pagination}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={styles["pagination-button"]}
              >
                <AiOutlineLeft
                  className={`${styles.arrow} ${
                    currentPage === 1 ? styles.disabled : ""
                  }`}
                />
              </button>
              <span
                className={styles.pages}
              >{`${currentPage} of ${totalPages}`}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={styles["pagination-button"]}
              >
                <AiOutlineRight
                  className={`${styles.arrow} ${
                    currentPage === totalPages ? styles.disabled : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const GET_POSTS = gql`
    query GetPosts($language: LanguageCodeFilterEnum!) {
      posts(where: { language: $language }, last: 1500) {
        nodes {
          databaseId
          title
          content
          slug
          language {
            code
            locale
          }
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
          date
          categories {
            nodes {
              name
            }
          }
          posts {
            postAuthor
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
    variables: { language: locale.toUpperCase() },
  });

  const posts = response.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
