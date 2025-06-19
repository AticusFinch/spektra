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
import { MdOutlineEmail } from "react-icons/md";

const teamMembers = [
  {
    name: "Jovan Džoli Ulićević",
    pozicija: "Izvršni direktor",
    role: "Executive Director",
    bioMne:
      "Jovan Džoli Ulićević je aktivista iz Crne Gore. Rođen je 1991. godine u Podgorici. Diplomirao je na Odsjeku za biologiju na Prirodno-matematičkom fakultetu u Podgorici, gdje se specijalizirao za ekologiju. Trenutno je student treće godine Diplomacije i međunarodnih odnosa na Humanističkim studijama Univerziteta Donja Gorica u Podgorici. Teme kojima se aktivno bavi su antifašizam, kvir aktivizam, feminizam i dekolonijalizam. Trenutno radi kao izvršni direktor u organizacijama Spektra i Trans Mreža Balkan.",
    bioEng:
      "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
    image: "/images/team/Jovan.jpg",
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
    image: "/images/team/Aleksa.jpg",
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
    image: "/images/team/Marija.jpg",
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
    image: "/images/team/Danijela.jpg",
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
    image: "/images/team/Iskra.jpg",
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
    image: "/images/team/Milva.jpg",
    width: "700",
    height: "987",
    email: "milvamilic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Marko Vukčević",
    pozicija: "Projektni koordinator",
    role: "Project Assistant",
    bioMne:
      "Marko Vukčević je aktivista i novinar rođen 2000. godine u Podgorici. Student je treće godine osnovnih studija na Pravnom fakultetu Univerziteta Crne Gore. Dugogodišnji angažman u brojnim organizacijama koje se bave različitim društvenim temama uključujući jačanje lokalne kulturne scene, aktivizam mladih i teme tranzicione pravde, kao i bogato volonterkso iskustvo pri Spektri doveli su do zvaničnog pridruživanja Spektrinom timu na poziciji projektog asistenta.",
    bioEng:
      "Integer scelerisque turpis dolor, sed dignissim nibh ornare ac. Phasellus eu accumsan diam. Integer sit amet ipsum et elit elementum consectetur. Morbi nibh enim, lacinia non sapien eget, condimentum mollis odio. Nam lectus sem, placerat at nisl non, molestie hendrerit dolor. In a diam efficitur, scelerisque nibh ac, feugiat sapien. Integer vulputate tortor vitae enim ultrices, quis euismod neque vulputate. Etiam eleifend ornare dolor pharetra convallis. Sed ut mi dictum, pulvinar lectus quis, volutpat nunc. Cras id gravida magna, sed cursus sem. Maecenas feugiat risus ac augue auctor, consectetur auctor risus semper. Praesent sit amet laoreet odio. Vestibulum eget tincidunt lorem. Quisque et lorem eu odio ullamcorper dignissim. Donec nisi mauris, pulvinar ac iaculis sed, cursus nec magna.",
    image: "/images/team/Marko.jpg",
    width: "700",
    height: "1050",
    email: "markovukcevic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
];

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
      link:
        locale === "sr"
          ? "/files/annual-reports/2024.pdf"
          : "/files/annual-reports/2024-en.pdf",
      image:
        locale === "sr"
          ? "/images/report/mne/24-mne.jpg"
          : "/images/report/eng/24-eng.jpg",
      width: "300",
      height: "200",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2023" : "Annual Report 2023",
      link:
        locale === "sr"
          ? "/files/annual-reports/2023.pdf"
          : "/files/annual-reports/2023-en.pdf",
      image:
        locale === "sr"
          ? "/images/report/mne/23-mne.jpg"
          : "/images/report/eng/23-eng.png",
      width: "300",
      height: "200",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2022" : "Annual Report 2022",
      link:
        locale === "sr"
          ? "/files/annual-reports/2022.pdf"
          : "/files/annual-reports/2022-en.pdf",
      image:
        locale === "sr"
          ? "/images/report/mne/23-mne.jpg"
          : "/images/report/eng/23-eng.png",
      width: "300",
      height: "200",
    },
    {
      name: locale === "sr" ? "Godišnji izvještaj 2020" : "Annual Report 2020",
      link:
        locale === "sr"
          ? "/files/annual-reports/2020.pdf"
          : "/files/annual-reports/2020-en.pdf",
      image:
        locale === "sr"
          ? "/images/report/mne/20-mne.jpg"
          : "/images/report/eng/23-eng.png",
      width: "300",
      height: "200",
    },
  ];

  const documents = [
    {
      name: locale === "sr" ? "Statut" : "Statute",
      link:
        locale === "sr"
          ? "/files/documents/statute/statut.pdf"
          : "/files/documents/statute/statute.pdf",
    },
    {
      name: locale === "sr" ? "Strateški plan" : "Strategic Plan",
      link:
        locale === "sr"
          ? "/files/documents/plan/plan-mne.pdf"
          : "/files/documents/plan/plan-eng.pdf",
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
        <title>Naši izvještaji i dokumenti</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.container}>
          {isReportPage && (
            <div>
              <h1 className={styles.title}>Naši izvještaji i dokumenti</h1>
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
                      <p className={styles["report-name"]}>{report.name}</p>
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
                      <div className={styles["report-image-container"]}>
                        <Image
                          src={report.image}
                          width={report.width}
                          height={report.height}
                          alt={report.alt}
                          objectFit="cover"
                          className={styles["report-image"]}
                        />
                      </div>
                      <p className={styles["report-name"]}>{report.name}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={styles["reports-head"]}>
                  {locale === "sr" ? "Dokumenti" : "Documents"}
                </h3>
                <div className={styles.reports}>
                  {documents.map((document, index) => (
                    <a
                      key={index}
                      href={document.link}
                      className={styles.report}
                      download
                    >
                      <p className={styles["report-name"]}>{document.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isCommunityPage && (
            <div className={styles.programs}>
              <h1 className={styles.title}>{page.title}</h1>
              <div className={styles.desc}>
                <p className={styles.introText}>
                  S obzirom na izuzetnu važnost pitanja zdravstvene zaštite za
                  zajednicu TIRV osoba, kroz ovaj program aktivno radimo na
                  pozitivnim promjenama u ovoj oblasti. Kako u Crnoj Gori ne
                  postoje posebne usluge za TIRV osobe, socijalne usluge koje
                  Spektra nudi unutar ovog programa jedine su ove vrste u
                  zemlji.
                </p>
                <div className={styles.programAims}>
                  <p className={styles.programAimsTitle}>
                    Ciljevi ovog programa su:{" "}
                  </p>
                  <ul className={styles.programAimsList}>
                    <li>
                      <p className={styles.programAimsItem}>
                        jačanje servisa psiho-socijalne pomoći,
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsItem}>
                        povećavanje pristupa odgovarajućoj, visokokvalitetnoj,
                        depatologizovanoj zdravstvenoj i socijalnoj zaštiti za
                        TIRV osobe
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsItem}>
                        povećanje pristup obrazovanju i tržištu rada i zaštiti
                        radnih prava.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.programHelp}>
                  <p className={styles.programHelpTitle}>
                    Kako ti, kao TIRV osobi, možemo biti od pomoći?
                  </p>
                  <p className={styles.programHelpText}>
                    Jedan od naših ciljeva je i kontinuirano pružanje direktne
                    pomoći i psihosocijalne podrške članovima/cama TIRV
                    zajednice. Zato u okviru rada ovog programa organizujemo:
                  </p>
                  <ul className={styles.programHelpList}>
                    <li>
                      <p className={styles.programHelpItem}>
                        grupe samopodrške isključivo za TIRV osobe;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programHelpItem}>
                        individualno vršnjačko savjetovanje;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programHelpItem}>
                        psihosocijalnu podršku i pomoć u integraciji u društvo
                      </p>
                    </li>
                    <li>
                      <p className={styles.programHelpItem}>
                        pomoć u pristupu psihološkoj pomoći, zdravstvenoj
                        zaštiti, pri zapošljavanju, azilu i pravnim postupcima;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programHelpItem}>
                        pomoć u pristupu psihološkoj pomoći, zdravstvenoj
                        zaštiti, pri zapošljavanju, azilu i pravnim postupcima;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programHelpItem}>
                        djelovanje u ulozi povjerljivog lica u slučajevima
                        nasilja.
                      </p>
                    </li>
                  </ul>
                </div>
                <p className={styles.programInfo}>
                  Više informacija o tome kako izgleda sprovođenje ovih
                  aktivnosti dostupno je na našim društvenim mrežama, ili
                  kontaktiranjem asistentkinje Iskre.
                </p>
                <div className={styles["program-coordinators"]}>
                  <div className={styles["program-coordinator"]}>
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[4].image}
                        width="250"
                        height="250"
                        alt={teamMembers[4].name}
                        className={styles["coordinator-img"]}
                        objectFit="cover"
                        priority
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
                        <p>{teamMembers[4].email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isAdvocacyPage && (
            <div className={styles.programs}>
              <h1 className={styles.title}>{page.title}</h1>
              <div className={styles.descAdvocacy}>
                <p className={styles.introTextAdvocacy}>
                  Naš zagovarački program se temelji na principima inkluzije,
                  ravnopravnosti i poštovanja ljudskih prava, s ciljem građenja
                  društva u kojem svaka osoba može živjeti slobodno i bez straha
                  od diskriminacije ili nasilja.
                </p>
                <div className={styles.programAimsAdvocacy}>
                  <p className={styles.programAimsAdvocacyTitle}>
                    Ciljevi ovog programa su:{" "}
                  </p>
                  <ul className={styles.programAimsAdvocacyList}>
                    <li>
                      <p className={styles.programAimsAdvocacyItem}>
                        unapređenje ljudskih prava TIRV zajednice kroz
                        unapređenje zakonodavnog okvira, nacionalnih strategija
                        i politika;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsAdvocacyItem}>
                        doprinos očuvanju demokratije kroz aktivno djelovanje u
                        javnom prostoru.
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsAdvocacyItem}>
                        podizanje svijesti o izazovima sa kojima se suočava
                        zajednica, kroz medijske kampanje i izdavanje
                        edukativnih materijala, organizovanjem javnih kampanja i
                        događaja;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsAdvocacyItem}>
                        obuka profesionalaca iz različitih sektora, uključujući
                        zdravstveni, pravni i obrazovni, kako bi se osigurala
                        bolja informisanost i senzibilisanost;
                      </p>
                    </li>
                    <li>
                      <p className={styles.programAimsAdvocacyItem}>
                        aktivna saradnja sa državnim institucijama, nevladinim
                        organizacijama i međunarodnim partnerima u cilju što
                        efektivnijeg postizanja ovih ciljeva.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.programHelpAdvocacy}>
                  <p className={styles.programHelpAdvocacyTitle}>
                    Trenutno je rad ovog programa najviše usmjeren kampanji za
                    pravno prepoznavanje roda tj. zagovaranje za usvajanje
                    Zakona o pravnom prepoznavanju rodnog identiteta na osnovu
                    samoodređenja.
                  </p>
                </div>
                <div
                  className={`${styles["program-coordinators"]} ${styles["program-coordinators-advocacy"]}`}
                >
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[0].image}
                        width="250"
                        height="250"
                        alt={teamMembers[0].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                    >
                      <div>
                        <h3 className={styles["coordinator-name"]}>
                          {teamMembers[0].name}
                        </h3>
                        <p className={styles["coordinator-role"]}>
                          {locale === "sr"
                            ? teamMembers[0].pozicija
                            : teamMembers[0].role}
                        </p>
                      </div>
                      <div>
                        <p className={styles["coordinator-bio"]}>
                          {locale === "sr"
                            ? teamMembers[0].bioProgramMNE
                            : teamMembers[0].bioProgramENG}
                        </p>
                      </div>
                      <div className={styles["coordinator-contact"]}>
                        <p>{teamMembers[0].email}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[3].image}
                        width={teamMembers[3].width}
                        height={teamMembers[3].height}
                        alt={teamMembers[3].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                    >
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
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-advocacy"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[6].image}
                        width="250"
                        height="250"
                        alt={teamMembers[6].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-advocacy"]}`}
                    >
                      <div>
                        <h3 className={styles["coordinator-name"]}>
                          {teamMembers[6].name}
                        </h3>
                        <p className={styles["coordinator-role"]}>
                          {locale === "sr"
                            ? teamMembers[6].pozicija
                            : teamMembers[6].role}
                        </p>
                      </div>
                      <div>
                        <p className={styles["coordinator-bio"]}>
                          {locale === "sr"
                            ? teamMembers[6].bioProgramMNE
                            : teamMembers[6].bioProgramENG}
                        </p>
                      </div>
                      <div className={styles["coordinator-contact"]}>
                        <p>{teamMembers[6].email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isFeminismPage && (
            <div className={styles.programs}>
              <h1 className={styles.title}>{page.title}</h1>
              <div className={styles.desc}>
                <p className={styles.introText}>
                  Feministički program prepoznaje površno, formalističko, i
                  heteronormativno tretiranje feminizma i feminističkih principa
                  u formalnom i neformalnom obrazovanju, što za posljedicu ima
                  neprestano tretiranje feminizma i rodne ravnopravnosti kao
                  isključivo ženskog pitanja. Ovo sprečava suštinsku i
                  zajedničku borbu protiv patrijarhalnog sistema unutar
                  opresivnog kapitalističkog sistema, i samim tim omogućava
                  njihov opstanak.{" "}
                </p>
                <div
                  className={`${styles.programAims} ${styles.programAimsFeminism}`}
                >
                  <p className={styles.programAimsTitle}>
                    Ciljevi ovog programa su:{" "}
                  </p>
                  <ul className={styles.programAimsList}>
                    <li>
                      povećana zastupljenost neformalnog feminističkog
                      obrazovanja;
                    </li>
                    <li>vidljivost feminističkih vrijednosti i principa;</li>
                    <li>
                      povećan stepen razumijevanja i vidljivosti TIRV zajednice;
                    </li>
                    <li>
                      jačanje kapaciteta organizacije za aktivno, efikasno i
                      profesionalno djelovanje;
                    </li>
                    <li>njegovanje i jačanje feminističkog savezništva.</li>
                  </ul>
                </div>
                <p className={styles.programInfoFeminism}>
                  Ovaj program pomno prati aktuelne društvene trendove, i
                  organizovanjem različitih radionica, festivala, i brojnih
                  drugih interaktivnih multimedijalnih događaja nudi ideje kako
                  im pristupiti. U okviru ovog programa koristimo različite
                  kanale kako bi se ključne feminističke teme sa margine
                  proširile ka centru, postale opšteprožimajuće i ostvarile svoj
                  preobražujući potencijal pri kreiranju društva i toga kako u
                  njemu živimo, radimo, brinemo i volimo. Zato unutar ovog
                  programa aktivno djeluje i tim za komunikacije.
                </p>
                <div className={styles.programKomsTeam}>
                  <p className={styles.programKomsTeamTitle}>RAD KOMS TIMA</p>
                  <p className={styles.programKomsTeamText}>
                    Kroz feministički program i upotrebu kreativnih metoda i
                    inovativnih pristupa radu kombinujemo feminističko znanje,
                    umjetnički senzibilitet, i tehnologiju. Stoga nam je važno
                    da ostanemo što aktivniji i vidljiviji putem brojnih
                    dostupnih platformi, bilo kroz tradicionalne medije ili
                    društvene mreže (koje su naročito važne, budući da su ove
                    teme često izostavljene iz medijskog diskursa, ili se ne
                    prenose vjerodostojno). Snalaženje kroz prepreke algoritama,
                    nalaženje zanimljivih načina da feministički sadržaj
                    prilagodimo tako da se što veći broj ljudi može sa njim
                    poistovjetiti – to osigurava rad tima za komunikacije unutar
                    ovog programa.
                  </p>
                </div>
                <div
                  className={`${styles["program-coordinators"]} ${styles["program-coordinators-feminism"]}`}
                >
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[2].image}
                        width={teamMembers[2].width}
                        height={teamMembers[2].height}
                        alt={teamMembers[2].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                    >
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
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[1].image}
                        width={teamMembers[1].width}
                        height={teamMembers[1].height}
                        alt={teamMembers[1].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                    >
                      <div>
                        <h3 className={styles["coordinator-name"]}>
                          {teamMembers[1].name}
                        </h3>
                        <p className={styles["coordinator-role"]}>
                          {locale === "sr"
                            ? teamMembers[1].pozicija
                            : teamMembers[1].role}
                        </p>
                      </div>
                      <div>
                        <p className={styles["coordinator-bio"]}>
                          {locale === "sr"
                            ? teamMembers[1].bioProgramMNE
                            : teamMembers[1].bioProgramENG}
                        </p>
                      </div>
                      <div className={styles["coordinator-contact"]}>
                        <p>{teamMembers[1].email}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["program-coordinator"]} ${styles["program-coordinator-feminism"]}`}
                  >
                    <div className={styles["coordinator-img-container"]}>
                      <Image
                        src={teamMembers[5].image}
                        width={teamMembers[5].width}
                        height={teamMembers[5].height}
                        alt={teamMembers[5].name}
                        className={styles["coordinator-img"]}
                      />
                    </div>
                    <div
                      className={`${styles["coordinator-text"]} ${styles["coordinator-text-feminism"]}`}
                    >
                      <div>
                        <h3 className={styles["coordinator-name"]}>
                          {teamMembers[5].name}
                        </h3>
                        <p className={styles["coordinator-role"]}>
                          {locale === "sr"
                            ? teamMembers[5].pozicija
                            : teamMembers[5].role}
                        </p>
                      </div>
                      <div>
                        <p className={styles["coordinator-bio"]}>
                          {locale === "sr"
                            ? teamMembers[5].bioProgramMNE
                            : teamMembers[5].bioProgramENG}
                        </p>
                      </div>
                      <div className={styles["coordinator-contact"]}>
                        <p>{teamMembers[5].email}</p>
                      </div>
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
