import { useRouter } from "next/router";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Head from "next/head";
import Container from "./utils/container";
import styles from "./whoSupportsOurWork.module.css";
import Image from "next/image";
import Link from "next/link";

const WhoSupportsOurWork = () => {
  const router = useRouter();
  const { locale } = router;

  const konglomerat = [
    {
      name: "Konglomerat 1",
      image: "/images/donors/34.png",
    },
    {
      name: "Konglomerat 2",
      image: "/images/donors/35.png",
    },
    {
      name: "Konglomerat 3",
      image: "/images/donors/36.png",
    },
    {
      name: "Konglomerat 4",
      image: "/images/donors/18.png",
    },
    {
      name: "Konglomerat 5",
      image: "/images/donors/14.png",
    },
    {
      name: "Konglomerat 6",
      image: "/images/donors/37.png",
    },
  ];

  const konglomerat2 = [
    {
      name: "Konglomerat 11",
      image: "/images/donors/25.png",
    },
    {
      name: "Konglomerat 7",
      image: "/images/donors/21.png",
      link: "https://smartbalkansproject.org/bs/",
    },
    {
      name: "Konglomerat 8",
      image: "/images/donors/22.png",
    },
    {
      name: "Konglomerat 9",
      image: "/images/donors/23.png",
    },
    {
      name: "Konglomerat 10",
      image: "/images/donors/24.png",
    },
  ];

  const konglomerat3 = [
    {
      name: "Konglomerat 32",
      image: "/images/donors/32.png",
    },
    {
      name: "Konglomerat 33",
      image: "/images/donors/33.png",
    },
    {
      name: "Konglomerat 31",
      image: "/images/donors/31.png",
    },
  ];

  const konglomerat4 = [
    {
      name: "Konglomerat 38",
      image: "/images/donors/38.png",
    },
    {
      name: "Konglomerat 39",
      image: "/images/donors/39.png",
    },
  ];

  const konglomerat5 = [
    {
      name: "Konglomerat 29",
      image: "/images/donors/29.png",
    },
    {
      name: "Konglomerat 30",
      image: "/images/donors/30.png",
    },
    {
      name: "Konglomerat 31",
      image: "/images/donors/31.png",
    },
  ];

  const konglomerat6 = [
    {
      name: "Konglomerat 40",
      image: "/images/donors/40.png",
    },
    {
      name: "Konglomerat 41",
      image: "/images/donors/41.png",
    },
  ];

  const donors = [
    {
      name: "Donor 1",
      image: "/images/donors/1.png",
    },
    {
      name: "Donor 2",
      image: "/images/donors/2.png",
    },
    {
      name: "Donor 3",
      image: "/images/donors/3.png",
    },
    {
      name: "Donor 4",
      image: "/images/donors/4.png",
    },
    {
      name: "Donor 5",
      image: "/images/donors/5.png",
    },
    {
      name: "Donor 6",
      image: "/images/donors/6.png",
    },
    {
      name: "Donor 7",
      image: "/images/donors/7.png",
    },
    {
      name: "Donor 8",
      image: "/images/donors/8.png",
    },
    {
      name: "Donor 9",
      image: "/images/donors/9.png",
    },
    {
      name: "Donor 10",
      image: "/images/donors/10.png",
    },
    {
      name: "Donor 11",
      image: "/images/donors/11.png",
    },
    {
      name: "Donor 12",
      image: "/images/donors/12.png",
    },
    {
      name: "Donor 13",
      image: "/images/donors/13.png",
    },
    {
      name: "Donor 14",
      image: "/images/donors/14.png",
    },
    {
      name: "Donor 15",
      image: "/images/donors/15.png",
    },
    {
      name: "Donor 16",
      image: "/images/donors/16.png",
    },
    {
      name: "Donor 17",
      image: "/images/donors/17.png",
    },
    {
      name: "Donor 18",
      image: "/images/donors/18.png",
    },
    {
      name: "Donor 19",
      image: "/images/donors/19.png",
    },
    {
      name: "Donor 20",
      image: "/images/donors/20.png",
    },
    {
      name: "Donor 21",
      image: "/images/donors/21.png",
    },
    {
      name: "Donor 26",
      image: "/images/donors/26.png",
    },
    {
      name: "Donor 27",
      image: "/images/donors/27.png",
    },
    {
      name: "Donor 28",
      image: "/images/donors/28.png",
    },
  ];

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
        <Container className2={styles.container}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              {locale === "sr"
                ? "Ko podržava naš rad?"
                : "Who supports our work?"}
            </h1>
            <div className={styles.konglomeratiContainer}>
              <div className={styles.konglomerati}>
                {konglomerat2.map((konglomerat) =>
                  konglomerat.link ? (
                    <Link
                      href={konglomerat.link}
                      key={konglomerat.name}
                      target="_blank"
                    >
                      <div
                        className={styles.konglomerat}
                        key={konglomerat.name}
                      >
                        <Image
                          src={konglomerat.image}
                          alt={konglomerat.name}
                          width={200}
                          height={200}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className={styles.konglomerat} key={konglomerat.name}>
                      <Image
                        src={konglomerat.image}
                        alt={konglomerat.name}
                        width={200}
                        height={200}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )
                )}
              </div>

              <div className={styles.konglomerati}>
                {konglomerat.map((konglomerat) => (
                  <div className={styles.konglomerat} key={konglomerat.name}>
                    <Image
                      src={konglomerat.image}
                      alt={konglomerat.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.konglomerati}>
                {konglomerat3.map((konglomerat) => (
                  <div className={styles.konglomerat} key={konglomerat.name}>
                    <Image
                      src={konglomerat.image}
                      alt={konglomerat.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.konglomerati}>
                {konglomerat4.map((konglomerat) => (
                  <div className={styles.konglomerat} key={konglomerat.name}>
                    <Image
                      src={konglomerat.image}
                      alt={konglomerat.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.konglomerati}>
                {konglomerat5.map((konglomerat) => (
                  <div className={styles.konglomerat} key={konglomerat.name}>
                    <Image
                      src={konglomerat.image}
                      alt={konglomerat.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.konglomerati}>
                {konglomerat6.map((konglomerat) => (
                  <div className={styles.konglomerat} key={konglomerat.name}>
                    <Image
                      src={konglomerat.image}
                      alt={konglomerat.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.konglomerati}>
                {donors.map((donor) => (
                  <div className={styles.konglomerat} key={donor.name}>
                    <Image
                      src={donor.image}
                      alt={donor.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default WhoSupportsOurWork;
