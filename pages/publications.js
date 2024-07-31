import React from "react";
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
import Link from "next/link";

import styles from "./publications.module.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegSadCry } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";

const POSTS_PER_PAGE = 10;

const Publications = (props) => {
  const { publications } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();
  const { locale } = router;

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";
  const pageTitle = locale === "sr" ? "Publikacije" : "Publications";

  const filteredPublications = publications.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const displayedPublications = filteredPublications.slice(start, end);

  useEffect(() => {
    const newTotalPages = Math.ceil(
      filteredPublications.length / POSTS_PER_PAGE
    );
    setTotalPages(newTotalPages);

    if (currentPage > newTotalPages) {
      setCurrentPage(1);
    }
  }, [filteredPublications, currentPage]);

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
        <div className={styles.publications}>
          <div className={styles["headline"]}>
            <h1 className={styles["publications-head"]}>
              {locale === "sr" ? "Publikacije" : "Publications"}
            </h1>
            <div className={styles["publication-search"]}>
              <button className={styles["search-button"]}>
                <HiMagnifyingGlass />
              </button>
              <input
                type="text"
                placeholder={
                  locale === "sr"
                    ? "pretraži publikacije"
                    : "search publications"
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
            className={`${styles["publications-container"]} ${
              displayedPublications.length === 0 ? styles.empty : ""
            }`}
          >
            {displayedPublications.length > 0 ? (
              displayedPublications.map((post, databaseId) => (
                <div key={databaseId} className={styles.publication}>
                  <Link
                    href={`/publications/${post.databaseId}`}
                    className={styles["post-link"]}
                  >
                    <div className={styles["publication-image-container"]}>
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        width={post.featuredImage.node.mediaDetails.width}
                        height={post.featuredImage.node.mediaDetails.height}
                        alt={post.featuredImage.node.altText || "Post image"}
                        className={styles["publication-image"]}
                      />
                    </div>
                    <div className={styles.content}>
                      <div>
                        <span className={styles["author"]}>
                          <FaPen className={styles["meta-icon"]} />
                          {post.publications.publicationAuthor}
                        </span>
                        <h3 className={styles.title}>{post.title}</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          if (post.publications.file.node.link) {
                            window.open(
                              post.publications.file.node.link,
                              "_blank"
                            );
                          }
                        }}
                        className={styles["download-button"]}
                      >
                        <RiDownload2Line className={styles["download-icon"]} />
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles["no-news"]}>
                {locale === "sr"
                  ? "Nema Novosti Pod Traženim Izrazom. "
                  : "No News Under Searched Term. "}
                <FaRegSadCry />
              </div>
            )}
          </motion.div>
          {displayedPublications.length > 0 && (
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
  const GET_PUBLICATIONS = gql`
    query GetPublications($language: LanguageCodeFilterEnum!) {
      publikacije(where: { language: $language }, last: 1000) {
        nodes {
          title
          databaseId
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
          publications {
            file {
              node {
                link
              }
            }
            publicationAuthor
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_PUBLICATIONS,
    variables: { language: locale.toUpperCase() },
  });

  const publications = response.data.publikacije.nodes;

  return {
    props: {
      publications,
    },
  };
}

export default Publications;
