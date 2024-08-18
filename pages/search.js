import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import styles from "./search.module.css";
import Link from "next/link";

const SearchResults = () => {
  const router = useRouter();
  const { term, locale } = router.query;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (term && locale) {
      setLoading(true);
      fetch(`/api/search?term=${term}&locale=${locale}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }
  }, [term, locale]);

  return (
    <div>
      <Navigation />
      <Container>
        <div className={styles.search}>
          <h1 className={styles.headline}>
            {locale === "sr" ? "Rezultati pretrage:" : "Search results:"}
          </h1>
          {loading ? (
            <p>{locale === "sr" ? "Učitavanje..." : "Loading..."}</p>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result, index) => (
                <li key={index} className={styles.result}>
                  <Link href={result.uri} className={styles.link}>
                    <span className={styles.type}>{result.postType}</span>
                    <h3 className={styles.head}>{result.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: result.content,
                      }}
                      className={styles.text}
                    ></p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {locale === "sr"
                ? "Nema pronađenih rezultata."
                : "No results found."}
            </p>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchResults;
