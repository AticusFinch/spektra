import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Head from "next/head";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "../utils/container";
import styles from "./[slug].module.css";
import { FaPen } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";

const Publication = ({ post }) => {
  const router = useRouter();
  const { locale } = router;

  if (!post) {
    return (
      <div>
        {locale === "sr"
          ? "Publikacija nije pronađena"
          : "Publication not found"}
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{`${locale === "sr" ? "Publikacije" : "Publication"} | ${
          post.title
        }`}</title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <Container>
        <div className={styles.publication}>
          <div className={styles["image-container"]}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              width={post.featuredImage.node.mediaDetails?.width || 800}
              height={post.featuredImage.node.mediaDetails?.height || 1000}
              alt={post.featuredImage.node.altText || "Publication image"}
              className={styles["publication-image"]}
            />
            <button
              onClick={(e) => {
                if (
                  post.publications &&
                  post.publications.file &&
                  post.publications.file.node &&
                  post.publications.file.node.link
                ) {
                  window.open(post.publications.file.node.link, "_blank");
                }
              }}
              className={styles.button}
            >
              <RiDownload2Line className={styles["download-icon"]} />
            </button>
          </div>

          <div className={styles["publication-content"]}>
            <h1 className={styles.title}>{post.title}</h1>
            <span className={styles["author"]}>
              <FaPen className={styles.icon} />
              {post.publications.publicationAuthor}
            </span>
            <div
              className={styles["publication-text"]}
              dangerouslySetInnerHTML={{ __html: post.content }}
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
        id
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

  return {
    props: {
      post: data.publikacijaBy || null,
    },
  };
}

export default Publication;
