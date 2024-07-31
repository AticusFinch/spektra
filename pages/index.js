import { useRouter } from "next/router";
import Navigation from "./utils/navigation";
import Hero from "./components/hero";
import News from "./components/news";
import Blog from "./components/blog";
import Publications from "./components/publications";
import Extra from "./components/extra";
import Footer from "./utils/footer";
import Head from "next/head";

import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

const Home = ({ news, blogs, publications }) => {
  const router = useRouter();
  const { locale } = router;

  const pageTitle = locale === "sr" ? "Početna" : "Home";
  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";

  return (
    <div>
      <Head>
        <title>{`${pageTitle} | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Hero />
      <News news={news} />
      <Blog blogs={blogs} />
      <Publications publications={publications} />
      <Extra />
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const { locale } = context;

  const GET_LATEST_NEWS = gql`
    query GetLatestVijesti($language: LanguageCodeFilterEnum!) {
      vijesti(where: { language: $language }, first: 6) {
        nodes {
          databaseId
          title
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
  `;

  const GET_LATEST_POSTS = gql`
    query GetLatestPosts($language: LanguageCodeFilterEnum!) {
      posts(where: { language: $language }, first: 6) {
        nodes {
          title
          featuredImage {
            node {
              mediaDetails {
                width
                height
              }
              sourceUrl
            }
          }
          posts {
            postAuthor
          }
          databaseId
          slug
        }
      }
    }
  `;

  const GET_LATEST_PUBLICATIONS = gql`
    query GetPublications($language: LanguageCodeFilterEnum!) {
      publikacije(where: { language: $language }, first: 6) {
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

  try {
    const responseBlog = await client.query({
      query: GET_LATEST_POSTS,
      variables: { language: locale.toUpperCase() },
    });
    const blogs = responseBlog?.data?.posts?.nodes ?? [];

    const responseNews = await client.query({
      query: GET_LATEST_NEWS,
      variables: { language: locale.toUpperCase() },
    });
    const news = responseNews?.data?.vijesti?.nodes ?? [];

    const responsePublications = await client.query({
      query: GET_LATEST_PUBLICATIONS,
      variables: { language: locale.toUpperCase() },
    });
    const publications = responsePublications?.data?.publikacije?.nodes ?? [];

    return {
      props: {
        blogs,
        news,
        publications,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [],
        news: [],
        publications: [],
      },
    };
  }
}

export default Home;
