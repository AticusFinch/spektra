import React from "react";
import { useState } from "react";
import Navigation from "./utils/navigation";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./report.module.css";

const Report = () => {
  const router = useRouter();
  const { locale } = router;

  const [formData, setFormData] = useState({
    genderIdentity: "",
    location: "",
    description: "",
    supportType: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://lightgreen-emu-646217.hostingersite.com/wp-json/wp/v2/forms/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Form submitted successfully");
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
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
            <div className={styles["report-info"]}>
              <p>
                freestar Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aenean vel orci non ex mollis dictum eu nec tortor. Fusce
                cursus posuere sapien, iaculis bibendum ligula sagittis eu.
                Vestibulum sed cursus ipsum. Pellentesque eu imperdiet lectus.
                Morbi ac risus aliquet, tristique purus sed, scelerisque massa.
                Quisque eu consequat mauris. In hac habitasse platea dictumst.
                Suspendisse feugiat finibus rutrum.
              </p>
              <p>
                Morbi pretium facilisis tempor. Praesent iaculis tincidunt lorem
                eu sollicitudin. Nulla facilisi. Donec in mi vestibulum sapien
                vulputate scelerisque. Maecenas egestas quam nisl, vel ultricies
                magna feugiat ac. Cras ut lorem elementum, commodo nibh at,
                efficitur lacus. In lectus dolor, convallis quis elit id, ornare
                condimentum justo. Vivamus rhoncus tincidunt semper.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla odio nisl, lobortis ut
                diam a, condimentum convallis mi. Duis arcu sapien, faucibus at
                leo a, pellentesque ullamcorper tortor. Morbi eget enim et nibh
                lobortis pretium.
              </p>
              <p>
                Morbi pretium facilisis tempor. Praesent iaculis tincidunt lorem
                eu sollicitudin. Nulla facilisi. Donec in mi vestibulum sapien
                vulputate scelerisque. Maecenas egestas quam nisl, vel ultricies
                magna feugiat ac. Cras ut lorem elementum, commodo nibh at,
                efficitur lacus. In lectus dolor, convallis quis elit id, ornare
                condimentum justo. Vivamus rhoncus tincidunt semper.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nulla odio nisl, lobortis ut
                diam a, condimentum convallis mi. Duis arcu sapien, faucibus at
                leo a, pellentesque ullamcorper tortor. Morbi eget enim et nibh
                lobortis pretium.
              </p>
            </div>
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
                  value={formData.genderIdentity}
                  onChange={handleChange}
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
                  value={formData.location}
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleChange}
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
                  value={formData.supportType}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={
                    locale === "sr"
                      ? "navedi svoje potrebe"
                      : "state your needs"
                  }
                  rows="5" // Specify the number of lines to display
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
                  value={formData.contactInfo}
                  onChange={handleChange}
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
                {locale === "sr" ? "POŠALJI" : "SUBMIT"}
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
