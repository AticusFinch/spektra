import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Head from "next/head";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "../utils/container";
import styles from "../news/[slug].module.css";
import Link from "next/link";
import { FiClock } from "react-icons/fi";

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

const ArchivePost = ({ post }) => {
  const router = useRouter();
  const { locale } = router;

  if (!post) {
    return (
      <div>
        <Head>
          <title>
            {locale === "sr" ? "Vijest nije pronađena" : "Post not found"} |
            {locale === "sr" ? "Arhiva" : "Archive"}
          </title>
        </Head>
        <Navigation />
        <Container>
          <p>
            {locale === "sr"
              ? "Vijest nije pronađena."
              : "Archive post not found."}
          </p>
          <Link href="/archive">
            {locale === "sr" ? "← Nazad na arhivu" : "← Back to archive"}
          </Link>
        </Container>
        <Footer />
      </div>
    );
  }

  const pageTitle = locale === "sr" ? "Arhiva" : "Archive";

  return (
    <div>
      <Head>
        <title>{`${pageTitle} | ${post.title}`}</title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <div className={styles["post-head-container"]}>
        <h1 className={styles["post-head"]}>
          {locale === "sr" ? "Arhiva" : "Archive"}
        </h1>
      </div>
      <Container
        styles={{ backgroundColor: "#efeff0" }}
        className2={styles.container}
      >
        <div className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <div>
            <span className={styles["post-meta"]}>
              <FiClock style={{ marginRight: "0.25rem", verticalAlign: "middle" }} />
              {formatDate(post.date)}
            </span>
            {post.featuredImage?.node?.sourceUrl && (
              <div className={styles["image-container"]}>
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width={post.featuredImage.node.mediaDetails?.width || 700}
                  height={post.featuredImage.node.mediaDetails?.height || 400}
                  alt={post.featuredImage.node.altText || "Post image"}
                  className={styles["post-image"]}
                />
              </div>
            )}
          </div>
          <div
            className={styles["post-text"]}
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
          <p style={{ marginTop: "2rem" }}>
            <Link href="/archive" className={styles["post-meta"]}>
              {locale === "sr" ? "← Nazad na arhivu" : "← Back to archive"}
            </Link>
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params, locale }) {
  const slug = params.slug;

  // Try both common WPGraphQL patterns for single CPT by slug
  const GET_ARCHIVE_POST_BY_SLUG = gql`
    query GetArchivePostBySlug($slug: String!) {
      archivePostBy(slug: $slug) {
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
      }
    }
  `;

  const GET_ARCHIVE_POST_BY_ID = gql`
    query GetArchivePostById($id: ID!) {
      archivePost(id: $id, idType: SLUG) {
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
      }
    }
  `;

  // Some setups use singular "archive" as the GraphQL name
  const GET_ARCHIVE_BY_SLUG = gql`
    query GetArchiveBySlug($slug: String!) {
      archiveBy(slug: $slug) {
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
      }
    }
  `;

  try {
    let post = null;

    try {
      const result = await client.query({
        query: GET_ARCHIVE_POST_BY_SLUG,
        variables: { slug },
      });
      post = result.data?.archivePostBy || null;
    } catch (e) {
      console.error("[Archive post] archivePostBy query failed:", e.message);
      if (e.graphQLErrors) {
        e.graphQLErrors.forEach((err) => console.error("  GraphQL:", err.message));
      }
    }

    if (!post) {
      try {
        const result = await client.query({
          query: GET_ARCHIVE_BY_SLUG,
          variables: { slug },
        });
        post = result.data?.archiveBy || null;
      } catch (e) {
        console.error("[Archive post] archiveBy query failed:", e.message);
      }
    }

    if (!post) {
      try {
        const result = await client.query({
          query: GET_ARCHIVE_POST_BY_ID,
          variables: { id: slug },
        });
        post = result.data?.archivePost || null;
      } catch (e) {
        console.error("[Archive post] archivePost(id, idType: SLUG) failed:", e.message);
      }
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching archive post:", error);
    return {
      props: {
        post: null,
      },
    };
  }
}

export default ArchivePost;
