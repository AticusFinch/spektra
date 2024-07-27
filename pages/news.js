import { useState, useEffect } from "react";
import React from "react";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Container from "./utils/container";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./news.module.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

const POSTS_PER_PAGE = 13;

const News = (props) => {
  const { news } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();
  const { locale } = router;

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";
  const pageTitle = locale === "sr" ? "Vijesti" : "News";

  const filteredNews = news.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const displayedNews = filteredNews.slice(start, end);

  useEffect(() => {
    const newTotalPages = Math.ceil(filteredNews.length / POSTS_PER_PAGE);
    setTotalPages(newTotalPages);

    if (currentPage > newTotalPages) {
      setCurrentPage(1);
    }
  }, [filteredNews, currentPage]);

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
        <title>{`${pageTitle} | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.news}>
          <div className={styles["news-head-container"]}>
            <h1 className={styles["news-head"]}>
              {locale === "sr" ? "Vijesti" : "News"}
            </h1>
            <div className={styles["news-search"]}>
              <button className={styles["search-button"]}>
                <HiMagnifyingGlass />
              </button>
              <input
                type="text"
                placeholder={
                  locale === "sr" ? "pretraži vijesti" : "search news"
                }
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
            className={`${styles["news-container"]} ${
              displayedNews.length === 0 ? styles.empty : ""
            }`}
          >
            {displayedNews.length > 0 ? (
              displayedNews.map((post, databaseId) => (
                <div key={databaseId} className={styles.post}>
                  <Link
                    href={`/news/${post.databaseId}`}
                    className={styles["post-link"]}
                  >
                    <div className={styles["post-image-container"]}>
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        width={post.featuredImage.node.mediaDetails.width}
                        height={post.featuredImage.node.mediaDetails.height}
                        alt={post.featuredImage.node.altText || "Post image"}
                        className={styles["post-image"]}
                      />
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.title} lang="en">
                        {post.title.split(" ").slice(0, 6).join(" ") +
                          (post.title.split(" ").length > 6 ? "..." : "")}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles["no-news"]}>
                {locale === "sr"
                  ? "Nema Članaka Pod Traženim Izrazom :("
                  : "No Posts Under Searched Term :("}
              </div>
            )}
          </motion.div>
          {displayedNews.length > 0 && (
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
  const GET_NEWS = gql`
    query GetVijesti($language: LanguageCodeFilterEnum!) {
      vijesti(where: { language: $language }, last: 1500) {
        nodes {
          databaseId
          title
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
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_NEWS,
    variables: { language: locale.toUpperCase() },
  });
  const news = response.data.vijesti.nodes;

  return {
    props: {
      news,
    },
  };
}
export default News;
