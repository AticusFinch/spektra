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
      pozicija: "Projektni asistent",
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
                        </div>
                        <div
                          className={`${styles["team-member-info"]} ${styles["team-member-info-odd"]}`}
                        >
                          <h3 className={styles["team-name"]}>{member.name}</h3>
                          <p className={styles["team-role"]}>
                            {locale === "sr" ? member.pozicija : member.role}
                          </p>
                        </div>
                        <div className={styles["team-member-mobile-bio"]}>
                          {locale === "sr" ? member.bioMne : member.bioEng}
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
                        <div className={styles["team-member-mobile-bio"]}>
                          {locale === "sr" ? member.bioMne : member.bioEng}
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
              {/* <div className={styles["program-gallery"]}>
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
              </Modal> */}
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
              {/* <div className={styles["program-gallery"]}>
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
              </Modal> */}
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
              {/* <div className={styles["program-gallery"]}>
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
              </Modal> */}
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
