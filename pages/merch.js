import Container from "./utils/container";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import styles from "./merch.module.css";

const Merch = () => {
  return (
    <>
      <Navigation />
      <Container>
        <div>Merch</div>
      </Container>
      <Footer />
    </>
  );
};

export default Merch;
