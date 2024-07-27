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

const Home = ({ news, blogs }) => {
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
      <Publications />
      <Extra />
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  // Fetch the latest 6 posts from the WordPress REST API
  const newsRes = await fetch(
    "https://lightgreen-emu-646217.hostingersite.com/wp-json/wp/v2/news?per_page=6&_embed"
  );
  const news = await newsRes.json();

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
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_LATEST_POSTS,
    variables: { language: locale.toUpperCase() },
  });

  const blogs = response.data.posts.nodes;

  // Return the data as props
  return {
    props: {
      news,
      blogs: blogs || [], // Ensure blogs is an array
    },
  };
}

export default Home;
