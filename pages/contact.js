import React from "react";
import Head from "next/head";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "./contact.module.css";

const Contact = () => {
  const router = useRouter();
  const { locale } = router;

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            commodo bibendum justo, quis egestas lacus laoreet ut. Suspendisse
            erat ex, euismod ut ipsum vel, commodo lacinia magna. Etiam pretium,
            enim et semper mollis, enim nisi euismod diam, eu faucibus velit sem
            id enim. In finibus, risus eget imperdiet mollis, lacus augue
            imperdiet metus, nec pulvinar orci nisi nec est. Sed varius mi ut
            leo ornare, quis fermentum dolor mollis. Cras egestas nulla a nunc
            feugiat lacinia. Nullam tincidunt egestas ullamcorper. Aliquam id
            iaculis odio, at molestie tortor. Nullam convallis magna ut mi
            sodales, at laoreet sem dictum. Suspendisse ultricies erat sed augue
            vulputate accumsan. Nam felis mauris, convallis vel luctus tempor,
            tempor non diam. Nunc rhoncus tortor tortor, ut dignissim tellus
            condimentum et. Nullam quis dolor mattis, mattis ante eu, ultricies
            nulla. Curabitur ac iaculis quam. Phasellus eu sagittis ligula, id
            congue enim. Sed et metus imperdiet, imperdiet quam at, ullamcorper
            justo. Donec et volutpat massa. Ut elit massa, imperdiet sit amet
            velit in, convallis suscipit lacus. Donec sed dui convallis, blandit
            augue eu, aliquet erat. Morbi ac aliquet nisl, et blandit metus.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <form className={styles["contact-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">
                {locale === "sr" ? "Ime i prezime:" : "Full Name:"}
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="pronounces">
                {locale === "sr"
                  ? "Zamjenice koje koristiš:"
                  : "Pronounces you use:"}
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="message">
                {locale === "sr" ? "Poruka:" : "Message:"}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
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
          </form>{" "}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
