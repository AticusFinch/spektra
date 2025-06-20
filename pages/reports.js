import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Image from "next/image";

import styles from "./pages.module.css";

const Page = () => {
  const router = useRouter();
  const { locale } = router;

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

  return (
    <div>
      <Head>
        <title>
          {locale === "sr"
            ? "Naši izvještaji i dokumenti"
            : "Our reports and documents"}
        </title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>
              {locale === "sr"
                ? "Naši izvještaji i dokumenti"
                : "Our reports and documents"}
            </h1>
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
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
