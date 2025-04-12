import React, { useState } from "react";
import Head from "next/head";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

import { sendMail } from "../lib/email";

import styles from "./contact.module.css";

const Contact = () => {
  const router = useRouter();
  const { locale } = router;

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        <strong>Email adresa:</strong> <br />
        <span style="padding-left: 10px;">${email}</span>
      </div>
      <div style="padding: 10px 0;">
        <strong>Poruka:</strong> <br />
        <span style="padding-left: 10px;">${message}</span>
      </div>
    </div>
  `;

    try {
      const data = await sendMail(
        "Website poruka:",
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
  const pageTitle = locale === "sr" ? "Kontakt" : "Contact";

  return (
    <div>
      <Head>
        <title>{`${pageTitle} | ${websiteTitle}`}</title>
      </Head>
      <Navigation />
      <Container>
        <div className={styles.container}>
          <h1 className={styles.head}>
            {locale === "sr" ? "Kontakt" : "Contact"}
          </h1>
          {emailSent ? (
            <div className={styles.thanks}>
              <p>
                {locale === "sr"
                  ? "Hvala što ste nas kontaktirali, javićemo vam se u najkraćem roku!"
                  : "Thank you for contacting us, we will reach back as soon as possible!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles["contact-form"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="name">
                  {locale === "sr" ? "Ime i prezime:" : "Full Name:"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="pronounces">
                  {locale === "sr"
                    ? "Zamjenice koje koristiš:"
                    : "Pronounces you use:"}
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="message">
                  {locale === "sr" ? "Poruka:" : "Message:"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
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
            </form>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
