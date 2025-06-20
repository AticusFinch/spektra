import styles from "./ourTeam.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import { useState, useEffect } from "react";
import { teamMembers } from "../lib/teamMembers";

// Helper function to format names with line breaks for display
const formatNameForDisplay = (name) => {
  return name.replace(/\s+/g, "\n");
};

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const OurTeam = () => {
  const router = useRouter();
  const { locale } = router;
  const [shuffledTeamMembers, setShuffledTeamMembers] = useState(teamMembers);

  useEffect(() => {
    setShuffledTeamMembers(shuffleArray(teamMembers));
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <div className={styles.teamContainer}>
          <div className={styles.teamHead}>
            <h1 className={styles.title}>
              {locale === "sr"
                ? "Ko čini naš tim?"
                : "Who is part of our team?"}
            </h1>
            <div></div>
          </div>
          <div className={styles.team}>
            {shuffledTeamMembers.map((member, index) => (
              <div key={index} className={styles["team-member"]}>
                {index % 2 === 0 ? (
                  <>
                    <div className={styles["team-image-container"]}>
                      <Image
                        src={member.image}
                        alt="team-member"
                        width="300"
                        height="300"
                        className={styles["team-image"]}
                        objectFit="cover"
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
                        src={member.image}
                        alt="team-member"
                        width="300"
                        height="300"
                        className={styles["team-image"]}
                        objectFit="cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OurTeam;
