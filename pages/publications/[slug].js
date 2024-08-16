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
import { RiDownload2Line } from "react-icons/ri";

const Publication = ({ publication }) => {
  const router = useRouter();
  const { locale } = router;

  if (!publication) {
    return <div>Publication not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{`${locale === "sr" ? "Publikacije" : "Publication"} | ${
          publication.title
        }`}</title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <Container>
        <div className={styles.publication}>
          <div className={styles["image-container"]}>
            <Image
              src={publication.featuredImage.node.sourceUrl}
              width={publication.featuredImage.node.mediaDetails.width}
              height={publication.featuredImage.node.mediaDetails.height}
              alt={
                publication.featuredImage.node.altText || "Publication image"
              }
              className={styles["publication-image"]}
            />
            <button
              onClick={(e) => {
                if (publication.publications.file.node.link) {
                  window.open(
                    publication.publications.file.node.link,
                    "_blank"
                  );
                }
              }}
              className={styles.button}
            >
              <RiDownload2Line className={styles["download-icon"]} />
            </button>
          </div>

          <div className={styles["publication-content"]}>
            <h1 className={styles.title}>{publication.title}</h1>
            <span className={styles["author"]}>
              <FaPen className={styles.icon} />{" "}
              {publication.publications.publicationAuthor}
            </span>
            <div
              className={styles["publication-text"]}
              dangerouslySetInnerHTML={{ __html: publication.content }}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params, locale }) {
  const GET_PUBLICATION = gql`
    query GetPublication($slug: String!) {
      publikacijaBy(slug: $slug) {
        title
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
  `;

  const { data } = await client.query({
    query: GET_PUBLICATION,
    variables: { slug: params.slug },
  });

  // if (!data.publikacijaBy) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      publication: data.publikacijaBy || null,
    },
  };
}

export default Publication;
