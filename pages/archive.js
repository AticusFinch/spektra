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
import { FaRegSadCry } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const POSTS_PER_PAGE = 13;

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(
      new Date(dateString)
    );
  } catch (error) {
    return dateString;
  }
};

const Archive = (props) => {
  const { archiveNews } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();
  const { locale } = router;

  // Use state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [localizedContent, setLocalizedContent] = useState({
    websiteTitle: "Association Spectra",
    pageTitle: "Archive",
    searchPlaceholder: "search archive",
    noNewsText: "No news in archive to display. ",
  });

  useEffect(() => {
    setMounted(true);
    if (locale === "sr") {
      setLocalizedContent({
        websiteTitle: "Asocijacija Spektra",
        pageTitle: "Arhiva",
        searchPlaceholder: "pretraži arhivu",
        noNewsText: "Nema vijesti u arhivi za prikaz. ",
      });
    }
  }, [locale]);

  const filteredNews = archiveNews.filter((post) =>
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

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div>
        <Head>
          <title>Archive | Association Spectra</title>
        </Head>
        <Navigation />
        <Container>
          <div className={styles.news}>
            <div className={styles["news-head-container"]}>
              <h1 className={styles["news-head"]}>Archive</h1>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{`${localizedContent.pageTitle} | ${localizedContent.websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.news}>
          <div className={styles["news-head-container"]}>
            <h1 className={styles["news-head"]}>
              {localizedContent.pageTitle}
            </h1>
            <div className={styles["news-search"]}>
              <button className={styles["search-button"]}>
                <HiMagnifyingGlass />
              </button>
              <input
                type="text"
                placeholder={localizedContent.searchPlaceholder}
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
                    href={`/archive/${post.slug}`}
                    className={styles["post-link"]}
                  >
                    <div className={styles["post-image-container"]}>
                      {post.featuredImage?.node?.sourceUrl ? (
                        <Image
                          src={post.featuredImage.node.sourceUrl}
                          width={
                            post.featuredImage.node.mediaDetails?.width || 700
                          }
                          height={
                            post.featuredImage.node.mediaDetails?.height || 400
                          }
                          alt={post.featuredImage.node.altText || "Post image"}
                          className={styles["post-image"]}
                        />
                      ) : (
                        <div className={styles["post-image-placeholder"]}>
                          <span>No Image</span>
                        </div>
                      )}
                    </div>
                    <div className={styles.content}>
                      <div className={styles["post-text"]}>
                        <span
                          className={`${styles["post-meta"]} ${styles.date}`}
                        >
                          <FiClock className={styles["meta-icon"]} />
                          {formatDate(post.date)}
                        </span>
                        <h3 className={styles.title}>{post.title}</h3>
                        <p
                          className={styles.excerpt}
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt || "",
                          }}
                        ></p>
                      </div>
                      {/* <div className={styles["post-footer"]}>
                        <div className={styles.categories}>
                          {post.categories.nodes.map((category) => (
                            <span
                              key={category.name}
                              className={styles.category}
                            >
                              {category.name}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles["no-news"]}>
                {localizedContent.noNewsText}
                <FaRegSadCry />
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
  try {
    // Fetch all news and filter on frontend for more flexibility
    const GET_ALL_ARCHIVE_NEWS = gql`
      query GetAllArchivePosts($language: LanguageCodeFilterEnum!) {
        archivePosts(where: { language: $language }, last: 2000) {
          nodes {
            databaseId
            slug
            title
            date
            excerpt
            content
            # categories {
            #   nodes {
            #     name
            #   }
            # }
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
      query: GET_ALL_ARCHIVE_NEWS,
      variables: { language: locale.toUpperCase() },
    });

    const allArchiveNews = response.data.archivePosts.nodes || [];

    const archiveNews = allArchiveNews;

    return {
      props: {
        archiveNews,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching archive news:", error);

    return {
      props: {
        archiveNews: [],
      },
      revalidate: 3600,
    };
  }
}

export default Archive;
