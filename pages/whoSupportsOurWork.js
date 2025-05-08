import { useRouter } from "next/router";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Head from "next/head";
import Container from "./utils/container";
import styles from "./whoSupportsOurWork.module.css";

const WhoSupportsOurWork = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <div>
        <Head>
          <title>
            {locale === "sr"
              ? "Ko podržava naš rad?"
              : "Who supports our work?"}
          </title>
        </Head>
      </div>
      <div>
        <Navigation />
        <Container>
          <div className={styles.container}>
            <h1 className={styles.title}>
              {locale === "sr"
                ? "Ko podržava naš rad?"
                : "Who supports our work?"}
            </h1>
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default WhoSupportsOurWork;
