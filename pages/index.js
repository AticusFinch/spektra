import Navigation from "./utils/navigation";
import Hero from "./components/hero";
import News from "./components/news";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <News />
    </div>
  );
};

export default Home;
