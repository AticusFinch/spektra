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

Modal.setAppElement("#__next");

import styles from "./pages.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Page = ({ page }) => {
  const router = useRouter();
  const { locale } = router;
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const teamMembers = [
    {
      name: "Jovan Džoli Ulićević",
      pozicija: "Izvršni direktor",
      role: "Executive Director",
      bioMne:
        "Jovan Džoli Ulićević je aktivista iz Crne Gore. Rođen je 1991. godine u Podgorici. Diplomirao je na Odsjeku za biologiju na Prirodno-matematičkom fakultetu u Podgorici, gdje se specijalizirao za ekologiju. Trenutno je student treće godine Diplomacije i međunarodnih odnosa na Humanističkim studijama Univerziteta Donja Gorica u Podgorici. Teme kojima se aktivno bavi su antifašizam, kvir aktivizam, feminizam i dekolonijalizam. Trenutno radi kao izvršni direktor u organizacijama Spektra i Trans Mreža Balkan.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog1.jpg",
      width: "700",
      height: "1050",
      email: "jovanulicevic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Aleksa Radonjić",
      pozicija: "Službenik za komunikacije",
      role: "Communication Officer",
      bioMne:
        "Aleksa Radonjić je aktivista rođen u Podgorici 2000. godine. Nakon završene Gimnazije upisao je Akademiju likovnih umjetnosti Univerziteta u Ljubljani, i diplomirao na smjeru konzervacije i restauracije umjetničkih djela. Svojim obrazovnim i životnim iskustvima neizbježno uvodi interdisciplinarnost u svaku sferu svog rada. U aktivizmu učestvuje od sedamnaeste godine učešćem u Organizacionom odboru Montenegro prajda, a od tada je i upoznat sa radom Spektre, u kojoj trenutno obavlja funkciju službenika za komunikacije.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog2.jpg",
      width: "800",
      height: "533",
      email: "aleksaradonjic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Marija Jovanović",
      pozicija: "Programska koordinatorka",
      role: "Program Coordinator",
      bioMne:
        "Marija je aktivistkinja iz Podgorice, rođena 1997. godine. Studentkinja je treće godina studija na smjeru psihologija Fakulteta primijenjenih nauka Univerziteta Donja Gorica. Aktivistkinja je za ljudska prava LGBTIQ osoba, feministkinja i jedna od osnivačica Asocijacije Spektra. U Spektri je angažovana na poziciji koordinatorke feminističkog programa, kroz koji realizuje projekte čiji se fokus nalazi na izgradnji kvir kulturne scene, na poljima vidljivosti i promociji feminističkih vrijednosti, kao i intersekcionalne neformalne edukacije.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog3.jpg",
      width: "700",
      height: "546",
      email: "marijajovanovic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Danijela Nikić",
      pozicija: "Projektna koordinatorka",
      role: "Project Coordinator",
      bioMne:
        "Danijela Nikić je aktivistkinja iz Ulcinja, rođena 1998. Diplomirala je socijalnu politiku i socijalni rad, a trenutno je magistrandkinja u oblasti socijalne politike i socijalnog rada na Fakultetu političkih nauka Univerziteta Crne Gore. Danijela je trenutno projektna koordinatorka u Asocijaciji Spektra i nedavno se priključila programu za zagovaranje u javnosti, stičući tako dodatno iskustvo u oblasti javnog zagovaranja.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog4.jpg",
      width: "700",
      height: "1050",
      email: "danijelanikic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Iskra Đurišić",
      pozicija: "Projektna asistentkinja",
      role: "Project Assistant",
      bioMne:
        "Iskra Đurišić je aktivistkinja rođena je 1999. godine u Podgorici. Završila je srednju Ekonomsko – ugostiteljsku školu u Baru. Aktivizmom se počela baviti 2021. kada je na Tik Toku javno dokumentovala svoju tranziciju. Nastavila je svoj aktivistički angažman zapošljavanjem u Asocijaciji Spektra, gdje je zaposlena kao asistentkinja u programu za rad sa zajednicom. Nedugo zatim, angažovana je i u Trans Mreži Balkan gdje radi kao voditeljica komunikacija.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog5.jpg",
      width: "1200",
      height: "799",
      email: "iskradjurisic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Milva Milić",
      role: "Graphic Designer",
      pozicija: "Grafička dizajnerka",
      bioMne:
        "Milva Milić je grafička dizajnerka rođena u Crnoj Gori, Podgorici, 1998. godine. Završila je srednju školu na smjeru dizajna enterijera, a zatim je kreativni put odveo na Fakultet likovnih umjetnosti na Cetinju, gdje je završila Bachelor studije na modulu grafičke komunikacije. Trenutno je na drugoj godini master studija na Fakultetu likovnih umjetnosti na Cetinju. Završila je program stručnog osposobljavanja u Asocijaciji Spektra a trenutno u istoj radi na poziciji grafičke dizajnerke.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog6.jpg",
      width: "700",
      height: "987",
      email: "milvamilic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
    {
      name: "Marko Vukčević",
      pozicija: "Projektni asistent",
      role: "Project Assistant",
      bioMne:
        "Marko Vukčević je aktivista i novinar rođen 2000. godine u Podgorici. Student je treće godine osnovnih studija na Pravnom fakultetu Univerziteta Crne Gore. Dugogodišnji angažman u brojnim organizacijama koje se bave različitim društvenim temama uključujući jačanje lokalne kulturne scene, aktivizam mladih i teme tranzicione pravde, kao i bogato volonterkso iskustvo pri Spektri doveli su do zvaničnog pridruživanja Spektrinom timu na poziciji projektog asistenta.",
      bioEng:
        "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
      image: "/images/blog1.jpg",
      width: "700",
      height: "1050",
      email: "markovukcevic@asocijacijaspektra.org",
      phone: "+382 67 123 456",
    },
  ];

  const shuffledTeamMembers = shuffleArray(teamMembers);

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
          {isWhatWeDoPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
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
                                ? "Ime i prezime:"
                                : "Full name:"}
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder={
                                locale === "sr"
                                  ? "npr. Stefan Stefanović"
                                  : "e.g. Mark Markson"
                              }
                              className={styles.input}
                              required
                            />
                          </div>
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
                                locale === "sr"
                                  ? "email adresa"
                                  : "email address"
                              }
                              required
                            />
                          </div>
                          <div className={styles["form-group"]}>
                            <ReCAPTCHA
                              sitekey={
                                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                              }
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
            </div>
          )}
          {isMissionPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
            </div>
          )}
          {isVisionPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
            </div>
          )}
          {isValuesPage && (
            <div>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
            </div>
          )}
          {isTeamPage && (
            <div>
              <div>
                <h1 className={styles.title}>{page.title}</h1>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: page.content }}
                ></div>
              </div>
              <div className={styles.team}>
                {shuffledTeamMembers.map((member, index) => (
                  <div key={index} className={styles["team-member"]}>
                    {index % 2 === 0 ? (
                      <>
                        <div className={styles["team-image-container"]}>
                          <Image
                            src={member.image} // Route of the image file
                            alt="team-member"
                            width={member.width} // Specify the width of the image
                            height={member.height} // Specify the height of the image
                            className={styles["team-image"]}
                          />
                        </div>
                        <div className={styles["team-member-content"]}>
                          <p className={styles["team-bio"]}>
                            {locale === "sr" ? member.bioMne : member.bioEng}
                          </p>
                          {/* <div className={styles["team-contact"]}>
                            <p>
                              <MdOutlineEmail className={styles["team-icon"]} />
                              {member.email}
                            </p>
                            <p>
                              <MdOutlinePhone className={styles["team-icon"]} />
                              {member.phone}
                            </p>
                          </div> */}
                        </div>
                        <div
                          className={`${styles["team-member-info"]} ${styles["team-member-info-odd"]}`}
                        >
                          <h3 className={styles["team-name"]}>{member.name}</h3>
                          <p className={styles["team-role"]}>
                            {locale === "sr" ? member.pozicija : member.role}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles["team-member-info"]}>
                          <h3 className={styles["team-name"]}>{member.name}</h3>
                          <p className={styles["team-role"]}>
                            {locale === "sr" ? member.pozicija : member.role}
                          </p>
                        </div>
                        <div className={styles["team-member-content"]}>
                          <p
                            className={`${styles["team-bio"]} ${styles["team-bio-even"]}`}
                          >
                            {locale === "sr" ? member.bioMne : member.bioEng}
                          </p>
                          {/* <div className={styles["team-contact"]}>
                            <p>
                              <MdOutlineEmail className={styles["team-icon"]} />
                              {member.email}
                            </p>
                            <p>
                              <MdOutlinePhone className={styles["team-icon"]} />
                              {member.phone}
                            </p>
                          </div> */}
                        </div>
                        <div className={styles["team-image-container"]}>
                          <Image
                            src={member.image} // Route of the image file
                            alt="team-member"
                            width={member.width} // Specify the width of the image
                            height={member.height} // Specify the height of the image
                            className={styles["team-image"]}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
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
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
              <div>
                <h3 className={styles["reports-head"]}>
                  {" "}
                  {locale === "sr" ? "Godišnji izvještaji" : "Annual Reports"}
                </h3>
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
                  {locale === "sr"
                    ? "Finansijski izvještaji"
                    : "Financial Reports"}
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
                      <p>
                        <MdOutlinePhone className={styles["contact-icon"]} />{" "}
                        {teamMembers[4].phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["program-gallery"]}>
                <Slider {...settings}>
                  {advocacyGallery.map((image, index) => (
                    <div
                      key={index}
                      className={styles["slider-container"]}
                      onClick={() => openModal(image)}
                    >
                      <div className={styles["slider-img-container"]}>
                        <Image
                          src={image.img}
                          width={image.width}
                          height={image.height}
                          alt={image.alt}
                          className={styles["slider-img"]}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className={styles.modal}
                overlayClassName={styles.overlay}
                style={customStyles}
              >
                {selectedImage && (
                  <div className={styles["modal-content"]}>
                    <div className={styles["modal-img-container"]}>
                      <Image
                        src={selectedImage.img}
                        width={selectedImage.width}
                        height={selectedImage.height}
                        alt={selectedImage.alt}
                      />
                    </div>
                    <button
                      onClick={closeModal}
                      className={styles["close-button"]}
                    >
                      <MdClose />
                    </button>
                  </div>
                )}
              </Modal>
            </div>
          )}
          {isAdvocacyPage && (
            <div className={styles.programs}>
              <div className={styles["program-text"]}>
                <h1 className={styles.title}>{page.title}</h1>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
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
                      <p>{teamMembers[2].email}</p>
                      <p>{teamMembers[2].phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["program-gallery"]}>
                <Slider {...settings}>
                  {advocacyGallery.map((image, index) => (
                    <div key={index} className={styles["slider-container"]}>
                      <div className={styles["slider-img-container"]}>
                        <Image
                          src={image.img}
                          width={image.width}
                          height={image.height}
                          alt={image.alt}
                          className={styles["slider-img"]}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
          {isFeminismPage && (
            <div className={styles.programs}>
              <div className={styles["program-text"]}>
                <h1 className={styles.title}>{page.title}</h1>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
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
                      <p>{teamMembers[3].email}</p>
                      <p>{teamMembers[3].phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["program-gallery"]}>
                <Slider {...settings}>
                  {advocacyGallery.map((image, index) => (
                    <div key={index} className={styles["slider-container"]}>
                      <div className={styles["slider-img-container"]}>
                        <Image
                          src={image.img}
                          width={image.width}
                          height={image.height}
                          alt={image.alt}
                          className={styles["slider-img"]}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
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
