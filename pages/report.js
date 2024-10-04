import React from "react";
import { useState } from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Head from "next/head";
import { useRouter } from "next/router";

import { sendMail } from "../lib/api";

import styles from "./report.module.css";

const Report = () => {
  const router = useRouter();
  const { locale } = router;

  const [genderIdentity, setGenderIdentity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [supportType, setSupportType] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailContent = `
    Message received from <strong>${genderIdentity}</strong>. 
    Their email address is <strong>${contactInfo}</strong>. <br />
    They'd like to know about...
    ${description}
  `;
    try {
      const data = await sendMail(
        "New message from website contact form",
        emailContent
      );

      if (data.sent) {
        // email was sent successfully!
        console.log("Email sent successfully!");
      } else {
        // email was sent unsuccessfully!
        console.log("Failed to send email!", data);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";

  return (
    <div>
      <Head>
        <title>
          {`${websiteTitle} | ${
            locale === "sr" ? "Prijavi nasilje" : "Report violence"
          }`}
        </title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.report}>
          <h1 className={styles["report-head"]}>
            {locale === "sr" ? "PRIJAVI NASILJE" : "REPORT VIOLENCE"}
          </h1>
          <div className={styles.content}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles["form-group"]}>
                <label htmlFor="genderIdentity">
                  {locale === "sr"
                    ? "Podijeli sa nama svoj rodni identitet ili zamjenice koje koristiš:"
                    : "Share with us your gender identity or pronouns you use:"}
                </label>
                <input
                  type="text"
                  id="genderIdentity"
                  name="genderIdentity"
                  placeholder={
                    locale === "sr" ? "npr. ona/njeno" : "e.g. she/her"
                  }
                  value={genderIdentity}
                  onChange={(e) => setGenderIdentity(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="location">
                  {locale === "sr"
                    ? "U kom dijelu Crne Gore živiš?"
                    : "In which part of Montenegro do you live?"}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder={
                    locale === "sr" ? "npr. Podgorica" : "e.g. Podgorica"
                  }
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="description">
                  {locale === "sr"
                    ? "Ukratko nam opiši situaciju sa kojom si se suočio/la ili se i dalje suočavaš:"
                    : "Briefly describe the situation you have faced or are still facing:"}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={styles.input}
                  placeholder={locale === "sr" ? "opis" : "description"}
                  rows="5"
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="supportType">
                  {locale === "sr"
                    ? " Da li nam se obraćaš sa ciljem da te podržimo u procesu prijavljivanja nasilja institucijama ili u cilju dobijanja vršnjačke / profesionala psihološka podršak? Potpuno je u redu ukoliko još uvijek nijesi siguran/a:"
                    : "Are you contacting us for support in the process of reporting violence to institutions or in order to obtain peer / professional psychological support? It is completely fine if you are still unsure:"}
                </label>
                <textarea
                  id="supportType"
                  name="supportType"
                  value={supportType}
                  onChange={(e) => setSupportType(e.target.value)}
                  className={styles.input}
                  placeholder={
                    locale === "sr"
                      ? "navedi svoje potrebe"
                      : "state your needs"
                  }
                  rows="5"
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="contactInfo">
                  {locale === "sr"
                    ? "Ostavi kontakt podatke putem kojih želiš da te član/ica našeg tima kontaktira:"
                    : "Leave contact information through which you want a member of our team to contact you:"}
                </label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className={styles.input}
                  placeholder={
                    locale === "sr"
                      ? "email, broj telefona..."
                      : "email, phone number..."
                  }
                  required
                />
              </div>
              <button type="submit" className={styles.button}>
                {locale === "sr" ? "POŠALJIiiii" : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Report;
