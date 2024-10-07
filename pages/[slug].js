import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import ReCAPTCHA from "react-google-recaptcha";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./pages.module.css";

import { MdClose } from "react-icons/md";

const Page = ({ page }) => {
  const router = useRouter();
  const { locale } = router;
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!page) {
    return (
      <div>
        {locale === "sr" ? "Stranica nije pronađena." : "Page not found."}
      </div>
    );
  }

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const isWhatWeDoPage =
    page.slug === "what-we-do" || page.slug === "cime-se-bavimo";

  const isReportsPage =
    page.slug === "our-reports" || page.slug === "nasi-izvjestaji";

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>{page.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>
          {isWhatWeDoPage && (
            <div className={styles["work-content"]}>
              <p>
                {locale === "sr"
                  ? "Spreman/na da napraviš razliku?"
                  : "Ready to make a difference?"}
              </p>
              <p>
                {locale === "sr"
                  ? "Prijavi se za volontiranje!"
                  : "Apply for volunteering!"}
              </p>
              {!isFormVisible ? (
                <button onClick={toggleFormVisibility}>
                  {locale === "sr" ? "Prijavi se" : "Apply"}
                </button>
              ) : (
                <span className={styles.close} onClick={toggleFormVisibility}>
                  <MdClose className={styles["close-icon"]} />
                </span>
              )}
              <AnimatePresence>
                {isFormVisible && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={styles["form-overflow"]}
                  >
                    <motion.div
                      initial={{ transform: "translateY(-100%)", opacity: 0 }}
                      animate={{ transform: "translateY(0)", opacity: 1 }}
                      exit={{ transform: "translateY(-100%)", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={styles["form-container"]}
                    >
                      <form className={styles["volunteer-form"]}>
                        <div className={styles["form-group"]}>
                          <label>
                            {locale === "sr"
                              ? "Koje zamjenice koristiš?"
                              : "What pronouns do you use?"}
                          </label>
                          <input
                            type="text"
                            id="genderIdentity"
                            name="genderIdentity"
                            placeholder={
                              locale === "sr"
                                ? "npr. ona/njeno"
                                : "e.g. she/her"
                            }
                            className={styles.input}
                            required
                          />
                        </div>
                        <div className={styles["form-group"]}>
                          <label>
                            {locale === "sr"
                              ? "Odakle si?"
                              : "Where are you from?"}
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder={
                              locale === "sr"
                                ? "npr. Podgorica"
                                : "e.g. Podgorica"
                            }
                            className={styles.input}
                            required
                          />
                        </div>
                        <div className={styles["form-group"]}>
                          <label>
                            {locale === "sr"
                              ? "Broj telefona:"
                              : "Phone number:"}
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder={
                              locale === "sr"
                                ? "npr. 067123456"
                                : "e.g. 067123456"
                            }
                            className={styles.input}
                            required
                          />
                        </div>
                        <div className={styles["form-group"]}>
                          <label>
                            {locale === "sr"
                              ? "Koje je tvoje iskustvo u radu sa trans osobama:"
                              : "What is your experience in working with trans persons:"}
                          </label>
                          <textarea
                            id="supportType"
                            name="supportType"
                            className={styles.input}
                            placeholder={
                              locale === "sr"
                                ? "navedi svoje iskustvo"
                                : "state your experience"
                            }
                            rows="5"
                            required
                          />
                        </div>
                        <div className={styles["form-group"]}>
                          <label htmlFor="contactInfo">
                            {locale === "sr"
                              ? "Email adresa:"
                              : "Email address:"}
                          </label>
                          <input
                            type="email"
                            id="contactInfo"
                            name="contactInfo"
                            className={styles.input}
                            placeholder={
                              locale === "sr" ? "email adresa" : "email address"
                            }
                            required
                          />
                        </div>
                        <div className={styles["form-group"]}>
                          <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={(value) => setCaptchaValue(value)}
                            className={styles.recaptcha}
                          />
                        </div>
                        <button type="submit" className={styles.button}>
                          {locale === "sr" ? "POŠALJI" : "SUBMIT"}
                        </button>
                      </form>{" "}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          {isReportsPage && (
            <div>
              <div>
                <h3 className={styles["reports-head"]}>Godišnji izvještaji</h3>
                <div className={styles.reports}>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Godišnji izvještaj 2024"
                        : "Annual Report 2024"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Godišnji izvještaj 2023"
                        : "Annual Report 2023"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Godišnji izvještaj 2022"
                        : "Annual Report 2022"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Godišnji izvještaj 2021"
                        : "Annual Report 2021"}
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h3 className={styles["reports-head"]}>
                  Finansijski izvještaji
                </h3>
                <div className={styles.reports}>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2024"
                        : "Financial Report 2024"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2023"
                        : "Financial Report 2023"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2022"
                        : "Financial Report 2022"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2021"
                        : "Financial Report 2021"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2022"
                        : "Financial Report 2022"}
                    </a>
                  </span>
                  <span className={styles["report-container"]}>
                    <a href="#" className={styles.report} download>
                      {locale === "sr"
                        ? "Finansijski izvještaj 2021"
                        : "Financial Report 2021"}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const query = gql`
    {
      pages {
        nodes {
          slug
          title
        }
      }
    }
  `;

  const { data } = await client.query({ query });
  const paths = data.pages.nodes.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const query = gql`
    query GetPage($slug: String!) {
      pageBy(uri: $slug) {
        title
        content
        slug
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { slug: params.slug },
  });

  return { props: { page: data.pageBy } };
}

export default Page;
