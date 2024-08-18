import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

export default async function handler(req, res) {
  const { term, locale } = req.query;

  if (!term) {
    return res.status(400).json({ error: "Search term is required" });
  }

  const SEARCH_QUERY = gql`
    query SearchContent($term: String!, $locale: LanguageCodeFilterEnum!) {
      posts(where: { search: $term, language: $locale }) {
        nodes {
          title
          uri
          slug
          content
          __typename
        }
      }
      publikacije(where: { search: $term, language: $locale }) {
        nodes {
          title
          uri
          slug
          content
          __typename
        }
      }
      vijesti(where: { search: $term, language: $locale }) {
        nodes {
          title
          uri
          slug
          content
          __typename
        }
      }
    }
  `;

  // Function to get postType based on locale
  function getPostType(type, locale) {
    const localeUpperCase = locale ? locale.toUpperCase() : "EN"; // Default to 'EN' if locale is undefined
    const postTypes = {
      EN: {
        Post: "Blog",
        Publikacija: "Publication",
        Vijest: "News",
      },
    };

    return postTypes[localeUpperCase] ? postTypes[localeUpperCase][type] : type;
  }

  try {
    const { data } = await client.query({
      query: SEARCH_QUERY,
      variables: { term, locale: locale.toUpperCase() },
    });

    // Combine results from posts, publikacije, and vijesti
    const combinedResults = [
      ...data.posts.nodes.map((node) => ({
        ...node,
        uri: `/blog/${node.slug}`,
        postType: getPostType("Blog", locale),
      })),
      ...data.publikacije.nodes.map((node) => ({
        ...node,
        uri: `/publications/${node.slug}`,
        postType: getPostType("Publikacija", locale),
      })),
      ...data.vijesti.nodes.map((node) => ({
        ...node,
        uri: `/news/${node.slug}`,
        postType: getPostType("Vijest", locale),
      })),
    ];

    res.status(200).json(combinedResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
