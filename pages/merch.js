import Container from "./utils/container";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import styles from "./merch.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import MerchType from "./components/merchType";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

const Merch = ({ merchByCollection, sortedCollectionNames }) => {
  const router = useRouter();
  const { locale } = router;

  // Manual translation for collection names
  const translateCollectionName = (name) => {
    const translations = {
      "Self-determination":
        locale === "sr" ? "Samoodređenje" : "Self-determination",
      Uncategorized: locale === "sr" ? "Bez kategorije" : "Uncategorized",
    };
    return translations[name] || name;
  };

  return (
    <>
      <Head>
        <title>
          {locale === "sr"
            ? "Merch | Asocijacija Spektra"
            : "Merch | Association Spectra"}
        </title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles["merch-title-container"]}>
          <h1 className={styles["merch-title"]}>Merch</h1>
        </div>

        {/* Render merch grouped by collection (sorted by creation order) */}
        {sortedCollectionNames.map((collectionName) => (
          <div key={collectionName} className={styles["collection-section"]}>
            <span className={styles["collection"]}>
              {locale === "sr" ? "Kolekcija:" : "Collection:"}
            </span>
            {collectionName && (
              <h2 className={styles["collection-title"]}>
                {translateCollectionName(collectionName)}
              </h2>
            )}
            <div className={styles["merch-container"]}>
              {merchByCollection[collectionName].map((merch, index) => (
                <MerchType
                  key={merch.id || index}
                  imageSrc={
                    merch.merch?.merchImage?.node?.sourceUrl ||
                    merch.featuredImage?.node?.sourceUrl ||
                    "/images/placeholder.jpg"
                  }
                  imageAlt={
                    merch.merch?.merchImage?.node?.altText ||
                    merch.featuredImage?.node?.altText ||
                    merch.slug
                  }
                  merchType={merch.merch?.merchType || ""}
                  material={merch.merch?.material || ""}
                  size={merch.merch?.size || ""}
                  color={merch.merch?.color || ""}
                  text={merch.merch?.text || ""}
                  availableAmount={merch.merch?.amount || 0}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const GET_MERCH = gql`
    query GetMerch($language: LanguageCodeFilterEnum!) {
      merchItems(where: { language: $language }, first: 1000) {
        nodes {
          id
          slug
          databaseId
          featuredImage {
            node {
              altText
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          merch {
            merchType
            merchImage {
              node {
                id
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
            }
            material
            size
            color
            text
            amount
          }
          merchCollections {
            nodes {
              name
              slug
              databaseId
            }
          }
          merchTypes {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.query({
      query: GET_MERCH,
      variables: { language: locale.toUpperCase() },
    });

    const merchItems = response.data.merchItems.nodes;

    // Group merch by collection and track collection IDs for sorting
    const merchByCollection = {};
    const collectionOrder = {}; // Track collection IDs for sorting

    merchItems.forEach((item) => {
      // Get collection name (use first collection if multiple, or "Uncategorized" if none)
      const collection = item.merchCollections?.nodes?.[0];
      const collectionName = collection?.name || "Uncategorized";
      const collectionId = collection?.databaseId || 999999; // High number for uncategorized

      if (!merchByCollection[collectionName]) {
        merchByCollection[collectionName] = [];
        collectionOrder[collectionName] = collectionId;
      }

      merchByCollection[collectionName].push(item);
    });

    // Sort collection names by their database ID (creation order)
    const sortedCollectionNames = Object.keys(merchByCollection).sort(
      (a, b) => collectionOrder[a] - collectionOrder[b]
    );

    return {
      props: {
        merchByCollection,
        sortedCollectionNames,
        locale,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching merch:", error);

    return {
      props: {
        merchByCollection: {},
        sortedCollectionNames: [],
        locale,
      },
      revalidate: 60,
    };
  }
}

export default Merch;
