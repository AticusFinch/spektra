import React from "react";
import Container from "../utils/container";
import Navigation from "../utils/navigation";
import Footer from "../utils/footer";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Navigation />
      <Container>
        <h1>Our Work</h1>
        <p>Our work is awesome!</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Work;
