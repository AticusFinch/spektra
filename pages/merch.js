import Container from "./utils/container";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import styles from "./merch.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import MerchType from "./components/merchType";

const Merch = () => {
  const router = useRouter();
  const { locale } = router;

  // Merch data for different types
  const merchData = [
    {
      imageSrc: "/images/merch/ceger/ceger4.jpg",
      imageAlt: "Tote bag",
      title: locale === "sr" ? "Ceger" : "Tote bag",
      material:
        locale === "sr"
          ? "Ceger je izrađen od 100% pamučne tkanine."
          : "Tote bag is made of 100% cotton fabric.",
      size: "M, L, XL",
      availableAmount: 10,
    },
    {
      imageSrc: "/images/merch/carape/carape1.jpg",
      imageAlt: "Socks",
      title: locale === "sr" ? "Carape" : "Socks",
      material:
        locale === "sr"
          ? "Carape su izrađene od 100% pamučne tkanine."
          : "Socks are made of 100% cotton fabric.",
      size: "S, M, L, XL",
      availableAmount: 25,
    },
    {
      imageSrc: "/images/merch/majice/majica1.jpg",
      imageAlt: "T-shirt",
      title: locale === "sr" ? "Majica" : "T-shirt",
      material:
        locale === "sr"
          ? "Majica je izrađena od 100% pamučne tkanine."
          : "T-shirt is made of 100% cotton fabric.",
      size: "S, M, L, XL, XXL",
      availableAmount: 15,
    },
    {
      imageSrc: "/images/merch/rokovnici/rokovnik1.jpg",
      imageAlt: "Notebook",
      title: locale === "sr" ? "Rokovnik" : "Notebook",
      material:
        locale === "sr"
          ? "Rokovnik je izrađen od kvalitetnog papira."
          : "Notebook is made of quality paper.",
      size: "A5",
      availableAmount: 30,
    },
  ];

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
        <div className={styles["merch-container"]}>
          {merchData.map((merch, index) => (
            <MerchType
              key={index}
              imageSrc={merch.imageSrc}
              imageAlt={merch.imageAlt}
              title={merch.title}
              material={merch.material}
              size={merch.size}
              availableAmount={merch.availableAmount}
              locale={locale}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Merch;
