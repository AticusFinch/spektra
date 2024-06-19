import Navigation from "./utils/navigation";
import Hero from "./components/hero";
import News from "./components/news";
import Blog from "./components/blog";
import Publications from "./components/publications";
import Extra from "./components/extra";
import Footer from "./utils/footer";

const Home = () => {
  return (
    <div>
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
