import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Head from "next/head";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "../utils/container";
import styles from "./[id].module.css";
import Link from "next/link";
import { FaPen } from "react-icons/fa";

const Post = ({ post, latestPosts }) => {
  const router = useRouter();
  const { locale } = router;

  if (!post) {
    return <div>Post not found</div>;
  }

  const dateObj = post && post.date ? new Date(post.date) : null;

  const formattedDate = dateObj
    ? `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
    : "Unknown Date";

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
              <div key={post.id} className={styles.more}>
                <Link
                  href={`/blog/${post.databaseId}`}
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
    query GetPost($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        databaseId
        title
        date
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
    variables: { id: params.id },
  });

  const notIn = postData.post ? [postData.post.databaseId] : [];

  const { data: latestPostsData } = await client.query({
    query: GET_LATEST_POSTS,
    variables: { notIn: notIn, language: locale.toUpperCase() },
  });

  return {
    props: {
      post: postData.post,
      latestPosts: latestPostsData.posts.edges.map((edge) => edge.node),
    },
  };
}

export default Post;
