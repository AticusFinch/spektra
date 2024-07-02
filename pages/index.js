import { useRouter } from "next/router";
import Navigation from "./utils/navigation";
import Hero from "./components/hero";
import News from "./components/news";
import Blog from "./components/blog";
import Publications from "./components/publications";
import Extra from "./components/extra";
import Footer from "./utils/footer";
import Head from "next/head";

const Home = () => {
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
      <News />
      <Blog />
      <Publications />
      <Extra />
      <Footer />
    </div>
  );
};

export default Home;
