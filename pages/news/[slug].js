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

const Post = ({ post, latestPosts }) => {
  const router = useRouter();
  const { locale } = router;

  if (!post) {
    return (
      <div>
        {locale === "sr" ? "Vijest nije pronađena" : "News post not found"}
      </div>
    );
  }

  const dateObj = post && post.date ? new Date(post.date) : null;

  const formattedDate = dateObj
    ? `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
    : "Unknown Date";

  const pageTitle = locale === "sr" ? "Vijesti" : "News";

  const filteredPosts = latestPosts
    ? latestPosts.filter(
        (latestPost) =>
          latestPost && post && latestPost.databaseId !== post.databaseId
      )
    : [];

  return (
    <div>
      <Head>
        <title>{`${pageTitle} | ${post.title}`}</title>
        <link rel="icon" href="ico.ico" />
      </Head>
      <Navigation />
      <div className={styles["post-head-container"]}>
        <h1 className={styles["post-head"]}>
          {locale === "sr" ? "Vijesti" : "News"}
        </h1>
      </div>
      <Container styles={{ backgroundColor: "#efeff0" }}>
        <div className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <div>
            <span className={styles["post-meta"]}>{formattedDate}</span>
            <div className={styles["image-container"]}>
              <Image
                src={
                  post.featuredImage?.node?.sourceUrl ||
                  "/path/to/default/image.jpg"
                }
                width={post.featuredImage?.node?.mediaDetails?.width || 700}
                height={post.featuredImage?.node?.mediaDetails?.height || 400}
                alt={post.featuredImage?.node?.altText || "Post head image"}
                className={styles["post-image"]}
              />
            </div>
            <span className={styles["post-meta"]}>
              {post.news.photoCredits}
            </span>
          </div>
          <div
            className={styles["post-text"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className={styles["read-more-section"]}>
          <h2 className={styles["more-head"]}>
            {locale === "sr" ? "Pročitaj još:" : "Read More:"}
          </h2>
          <div className={styles["more-container"]}>
            {filteredPosts.map((post) => (
              <div key={post.databaseId} className={styles.more}>
                <Link
                  href={`/news/${post.slug}`}
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
  const GET_NEWS = gql`
    query GetVijesti($slug: String!) {
      vijestBy(slug: $slug) {
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
        news {
          photoCredits
        }
      }
    }
  `;

  const GET_LATEST_NEWS = gql`
    query GetLatestVijesti($notIn: [ID], $language: LanguageCodeFilterEnum!) {
      vijesti(
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
    query: GET_NEWS,
    variables: { slug: params.slug },
  });

  const notIn = postData.vijestBy ? [postData.vijestBy.databaseId] : [];

  const { data: latestPostsData } = await client.query({
    query: GET_LATEST_NEWS,
    variables: { notIn: notIn, language: locale.toUpperCase() },
  });

  return {
    props: {
      post: postData.vijestBy,
      latestPosts: latestPostsData.vijesti.edges.map((edge) => edge.node),
    },
  };
}

export default Post;
