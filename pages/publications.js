import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navigation from "./utils/navigation";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Head from "next/head";

import {
  AiOutlineDownload,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

import styles from "./publications.module.css";

const PUBLICATIONS_PER_PAGE = 12;

const Publications = (props) => {
  const { publications } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();
  const { locale } = router;

  const pageTitle = locale === "sr" ? "Publikacije" : "Publications";

  function handleButtonClick(url) {
    window.open(url, "_blank");
  }

  const filteredPublications = publications.filter((publication) =>
    publication.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const start = (currentPage - 1) * PUBLICATIONS_PER_PAGE;
  const end = start + PUBLICATIONS_PER_PAGE;
  const displayedPublications = filteredPublications.slice(start, end);

  useEffect(() => {
    // Calculate total pages based on filtered publications
    const newTotalPages = Math.ceil(
      filteredPublications.length / PUBLICATIONS_PER_PAGE
    );
    setTotalPages(newTotalPages);

    // Reset to the first page if the current page is out of range
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
    initial: { opacity: 0, x: "-100vw" }, // Start from the left
    in: { opacity: 1, x: 0 }, // Move to center
    out: { opacity: 0, x: "100vw" }, // Exit to the right
  };
  return (
    <>
      <Head>
        <title>{`${pageTitle} | Asocijacija Spektra`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.publications}>
          <div className={styles.headline}>
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
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
            className={`${styles["publications-container"]} ${
              displayedPublications.length === 0 ? styles.empty : ""
            }`}
          >
            {displayedPublications.length > 0 ? (
              displayedPublications.map((publication, index) => (
                <div key={index} className={styles.publication}>
                  <div className={styles["publication-image-container"]}>
                    <Image
                      src={publication.featuredImage.node.sourceUrl}
                      width={publication.featuredImage.node.mediaDetails.width}
                      height={
                        publication.featuredImage.node.mediaDetails.height
                      }
                      alt={
                        publication.featuredImage.node.altText ||
                        "Publication image"
                      }
                      className={styles["publication-image"]}
                    />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h3 className={styles.title}>{publication.title}</h3>
                      <p className={styles.author}>
                        {publication.publications.publicationAuthor}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          publication.publications.file.node.link
                        )
                      }
                      className={styles["download-button"]}
                    >
                      <AiOutlineDownload className={styles["download-icon"]} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles["no-publications"]}>
                {locale === "sr"
                  ? "Nema Publikacija Pod Traženim Izrazom :("
                  : "No Publications Under Searched Term :("}
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
    </>
  );
};

export async function getServerSideProps() {
  const GET_POSTS = gql`
    query GetPublications {
      publications(first: 1000) {
        nodes {
          title
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

  const response = await client.query({ query: GET_POSTS });
  const publications = response.data.publications.nodes;

  return {
    props: {
      publications,
    },
  };
}

export default Publications;