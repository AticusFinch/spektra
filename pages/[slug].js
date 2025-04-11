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
import Image from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";

import { sendMail } from "../lib/email";

Modal.setAppElement("#__next");

import styles from "./pages.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Page = ({ page }) => {
  const router = useRouter();
  const { locale } = router;

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [commingFrom, setCommingFrom] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const emailContent = `
     <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <div style="padding: 10px 0;">
        <strong>Ime i prezime</strong> <br />
        <span style="padding-left: 10px;">${name}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Zamjenice/rodni identitet:</strong> <br />
        <span style="padding-left: 10px;">${gender}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Odakle dolazi:</strong> <br />
        <span style="padding-left: 10px;">${commingFrom}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Broj telefona:</strong> <br />
        <span style="padding-left: 10px;">${phoneNumber}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Iskustvo:</strong> <br />
        <span style="padding-left: 10px;">${experience}</span>
      </div>
    </div>
  `;

    try {
      const data = await sendMail(
        "Website poruka: Volontiranje",
        emailContent,
        captchaValue
      );

      if (data.sent) {
        // email was sent successfully!
        setEmailSent(true);
        console.log("Email sent successfully!");
      } else {
        // email was sent unsuccessfully!
        console.log("Failed to send email!", data);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

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

  const isMissionPage =
    page.slug === "what-is-our-mission" || page.slug === "koja-je-nasa-misija";

  const isVisionPage =
    page.slug === "what-is-our-vission" || page.slug === "koja-je-nasa-vizija";

  const isValuesPage =
    page.slug === "what-are-our-values" ||
    page.slug === "koje-su-nase-vrijednosti";

  const isTeamPage =
    page.slug === "who-is-part-of-our-team" || page.slug === "ko-cini-nas-tim";

  const isSupportPage =
    page.slug === "who-supports-our-work" ||
    page.slug === "ko-podrzava-nas-rad";

  const isReportPage =
    page.slug === "our-reports" || page.slug === "nasi-izvjestaji";

  const isCommunityPage =
    page.slug === "community-work-program" ||
    page.slug === "program-za-rad-sa-zajednicom";

  const isAdvocacyPage =
    page.slug === "advocacy-program" || page.slug === "program-zagovaranja";

  const isFeminismPage =
    page.slug === "feminism-program" || page.slug === "feministicki-program";

  const financialReports = [
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2024"
          : "Financial Report 2024",
      link: "/files/financial-reports/2024.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2023"
          : "Financial Report 2023",
      link: "/files/financial-reports/2023.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2021"
          : "Financial Report 2021",
      link: "/files/financial-reports/2021.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2020"
          : "Financial Report 2020",
      link: "/files/financial-reports/2020.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2019"
          : "Financial Report 2019",
      link: "/files/financial-reports/2019.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2018"
          : "Financial Report 2018",
      link: "/files/financial-reports/2018.pdf",
    },
    {
      name:
        locale === "sr"
          ? "Finansijski izvještaj 2017"
          : "Financial Report 2017",
      link: "/files/financial-reports/2017.pdf",
    },
  ];

  const annualReports = [
    {
      name: locale === "sr" ? "Godišnji izvještaj 2024" : "Annual Report 2024",
      link: "/files/annual-reports/2024.pdf",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2023" : "Annual Report 2023",
      link: "/files/annual-reports/2023.pdf",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2022" : "Annual Report 2022",
      link: "/files/annual-reports/2022.pdf",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2020" : "Annual Report 2020",
      link: "/files/annual-reports/2020.pdf",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <MdArrowBackIosNew />
    </div>
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const advocacyGallery = [
    {
      img: "/images/news1.jpg",
      width: "700",
      height: "1051",
      alt: "advocacy-gallery",
    },
    {
      img: "/images/news2.jpg",
      width: "700",
      height: "933",
      alt: "advocacy-gallery",
    },
    {
      img: "/images/news3.jpg",
      width: "700",
      height: "466",
      alt: "advocacy-gallery",
    },
    {
      img: "/images/news4.jpg",
      width: "700",
      height: "1050",
      alt: "advocacy-gallery",
    },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#191919",
      border: "none",
      width: "80%",
      height: "70%",
      marginTop: "3%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    overlay: {
      backgroundColor: "#252525c2",
    },
  };

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.container}>
          {isSupportPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
            </div>
          )}
          {isReportPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div>
                <h3 className={styles["reports-head"]}>
                  {locale === "sr"
                    ? "Finansijski izvještaji"
                    : "Financial Reports"}
                </h3>
                <div className={styles.reports}>
                  {financialReports.map((report, index) => (
                    <a
                      key={index}
                      href={report.link}
                      className={styles.report}
                      download
                    >
                      {report.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={styles["reports-head"]}>
                  {locale === "sr" ? "Godišnji izvještaji" : "Annual Reports"}
                </h3>
                <div className={styles.reports}>
                  {annualReports.map((report, index) => (
                    <a
                      key={index}
                      href={report.link}
                      className={styles.report}
                      download
                    >
                      {report.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isCommunityPage && (
            <div className={styles.programs}>
              <div className={styles["program-text"]}>
                <div className={styles.desc}>
                  <h1 className={styles.title}>{page.title}</h1>
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: page.content }}
                  />
                </div>
                <div className={styles["program-coordinator"]}>
                  <div className={styles["coordinator-img-container"]}>
                    <Image
                      src={teamMembers[4].image}
                      width={teamMembers[4].width}
                      height={teamMembers[4].height}
                      alt={teamMembers[4].name}
                      className={styles["coordinator-img"]}
                    />
                  </div>
                  <div className={styles["coordinator-text"]}>
                    <div>
                      <h3 className={styles["coordinator-name"]}>
                        {teamMembers[4].name}
                      </h3>
                      <p className={styles["coordinator-role"]}>
                        {locale === "sr"
                          ? teamMembers[4].pozicija
                          : teamMembers[4].role}
                      </p>
                    </div>
                    <div>
                      <p className={styles["coordinator-bio"]}>
                        {locale === "sr"
                          ? teamMembers[4].bioProgramMNE
                          : teamMembers[4].bioProgramENG}
                      </p>
                    </div>
                    <div className={styles["coordinator-contact"]}>
                      <p>
                        <MdOutlineEmail className={styles["contact-icon"]} />{" "}
                        {teamMembers[4].email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isAdvocacyPage && (
            <div className={styles.programs}>
              <div className={styles["program-text"]}>
                <div className={styles.desc}>
                  <h1 className={styles.title}>{page.title}</h1>
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: page.content }}
                  />
                </div>
                <div className={styles["program-coordinator"]}>
                  <div className={styles["coordinator-img-container"]}>
                    <Image
                      src={teamMembers[3].image}
                      width={teamMembers[3].width}
                      height={teamMembers[3].height}
                      alt={teamMembers[3].name}
                      className={styles["coordinator-img"]}
                    />
                  </div>
                  <div className={styles["coordinator-text"]}>
                    <div>
                      <h3 className={styles["coordinator-name"]}>
                        {teamMembers[3].name}
                      </h3>
                      <p className={styles["coordinator-role"]}>
                        {locale === "sr"
                          ? teamMembers[3].pozicija
                          : teamMembers[3].role}
                      </p>
                    </div>
                    <div>
                      <p className={styles["coordinator-bio"]}>
                        {locale === "sr"
                          ? teamMembers[3].bioProgramMNE
                          : teamMembers[3].bioProgramENG}
                      </p>
                    </div>
                    <div className={styles["coordinator-contact"]}>
                      <p>
                        <MdOutlineEmail className={styles["contact-icon"]} />{" "}
                        {teamMembers[3].email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isFeminismPage && (
            <div className={styles.programs}>
              <div className={styles["program-text"]}>
                <div className={styles.desc}>
                  <h1 className={styles.title}>{page.title}</h1>
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: page.content }}
                  />
                </div>
                <div className={styles["program-coordinator"]}>
                  <div className={styles["coordinator-img-container"]}>
                    <Image
                      src={teamMembers[2].image}
                      width={teamMembers[2].width}
                      height={teamMembers[2].height}
                      alt={teamMembers[2].name}
                      className={styles["coordinator-img"]}
                    />
                  </div>
                  <div className={styles["coordinator-text"]}>
                    <div>
                      <h3 className={styles["coordinator-name"]}>
                        {teamMembers[2].name}
                      </h3>
                      <p className={styles["coordinator-role"]}>
                        {locale === "sr"
                          ? teamMembers[2].pozicija
                          : teamMembers[2].role}
                      </p>
                    </div>
                    <div>
                      <p className={styles["coordinator-bio"]}>
                        {locale === "sr"
                          ? teamMembers[2].bioProgramMNE
                          : teamMembers[2].bioProgramENG}
                      </p>
                    </div>
                    <div className={styles["coordinator-contact"]}>
                      <p>
                        <MdOutlineEmail className={styles["contact-icon"]} />{" "}
                        {teamMembers[2].email}
                      </p>
                    </div>
                  </div>
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
