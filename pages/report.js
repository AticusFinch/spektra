import React from "react";
import { useState } from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Head from "next/head";
import { useRouter } from "next/router";

import { sendMail } from "../lib/email";

import styles from "./report.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const Report = () => {
  const router = useRouter();
  const { locale } = router;

  const [genderIdentity, setGenderIdentity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [supportType, setSupportType] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const emailContent = `
     <div style="font-family: Roboto, sans-serif; line-height: 1.6;">
      <div style="padding: 10px 0;">
        <strong>Rodni identitet/zamjenice:</strong> <br />
        <span style="padding-left: 10px;">${genderIdentity}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Odakle dolazi:</strong> <br />
        <span style="padding-left: 10px;">${location}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Opis problema:</strong> <br />
        <span style="padding-left: 10px;">${description}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Vrsta potrebne podrške:</strong> <br />
        <span style="padding-left: 10px;">${supportType}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Kontakt:</strong> <br />
        <span style="padding-left: 10px;">${contactInfo}</span>
      </div>
    </div>
  `;
    try {
      const data = await sendMail(
        "Website poruka: Zahtjev za podršku",
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

  const websiteTitle =
    locale === "sr" ? "Asocijacija Spektra" : "Association Spectra";

  return (
    <div>
      <Head>
        <title>
          {`${websiteTitle} | ${locale === "sr" ? "Podrška" : "Support"}`}
        </title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.report}>
          <h1 className={styles["report-head"]}>
            {locale === "sr"
              ? "NISI SAM/A – TU SMO ZA TEBE!"
              : "YOU ARE NOT ALONE – WE ARE HERE FOR YOU!"}
          </h1>
          <div className={styles.content}>
            <div className={styles["report-info"]}>
              <p>
                {locale === "sr"
                  ? "Svjesni/e smo da se nažalost trans i rodno varijantne osobe često suočavaju sa nasiljem i diskriminacijom u različitim aspektima života. Asocijacija Spektra ti može pružiti podršku i siguran prostor ukoliko si pogođen/a bilo kojim vidom nasilja."
                  : "We are aware that trans and gender variant people often experience violence and discrimination in various aspects of life. Asocijacija Spektra can provide support and a safe space if you have been subjected to any form of violence."}
              </p>
              <p>
                {locale === "sr"
                  ? "Ako si doživjeo/la nasilje ili diskriminaciju zbog svog rodnog identiteta ili izražavanja, želimo da znaš – ne moraš prolaziti kroz to sam/a."
                  : "If you have experienced violence or discrimination based on your gender identity or expression, we want you to know – you don't have to go through it alone."}
              </p>
              <p>
                {locale === "sr"
                  ? "Spektra ti nudi siguran prostor i različite vrste podrške"
                  : "Spektra offers a safe space and various types of support"}
              </p>
            </div>
            <div className={styles["form-container"]}>
              {emailSent ? (
                <div className={styles.thanks}>
                  <p>
                    {locale === "sr"
                      ? "Hvala što ste nas kontaktirali, javićemo vam se u najkraćem roku!"
                      : "Thank you for contacting us, we will reach back as soon as possible!"}
                  </p>
                </div>
              ) : (
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
                        ? " Da li nam se obraćaš sa ciljem da te podržimo u procesu prijavljivanja nasilja institucijama ili u cilju dobijanja vršnjačke / profesionalne psihološke podrške? Potpuno je u redu ukoliko još uvijek nijesi siguran/a:"
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
                  <div className={styles["form-group"]}>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    {locale === "sr" ? "POŠALJI" : "SUBMIT"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Report;
