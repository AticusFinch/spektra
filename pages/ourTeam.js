import styles from "./ourTeam.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Jovan\nDžoli\nUlićević",
    pozicija: "Izvršni direktor",
    role: "Executive Director",
    bioMne:
      "Jovan Džoli Ulićević je aktivista iz Crne Gore. Rođen je 1991. godine u Podgorici. Diplomirao je na Odsjeku za biologiju na Prirodno-matematičkom fakultetu u Podgorici, gdje se specijalizirao za ekologiju. Trenutno je student treće godine Diplomacije i međunarodnih odnosa na Humanističkim studijama Univerziteta Donja Gorica u Podgorici. Teme kojima se aktivno bavi su antifašizam, kvir aktivizam, feminizam i dekolonijalizam. Trenutno radi kao izvršni direktor u organizacijama Spektra i Trans Mreža Balkan.",
    bioEng:
      "Jovan Džoli Ulićević is an activist from Montenegro. He was born in 1991 in Podgorica. He holds a degree in Biology from the Faculty of Natural Sciences and Mathematics in Podgorica, where he specialized in Ecology. He is currently a third-year student of Diplomacy and International Relations at the Faculty of Humanities, University of Donja Gorica in Podgorica. His work focuses on topics such as anti-fascism, queer activism, feminism, and decolonialism. He currently serves as the Executive Director of the organizations Spectra and Trans Network Balkan.",
    image: "/images/team/Jovan.jpg",
    width: "1050",
    height: "1050",
    email: "jovanulicevic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Aleksa\nRadonjić",
    pozicija: "Službenik za komunikacije",
    role: "Communication Officer",
    bioMne:
      "Aleksa Radonjić je aktivista rođen u Podgorici 2000. godine. Nakon završene Gimnazije upisao je Akademiju likovnih umjetnosti Univerziteta u Ljubljani, i diplomirao na smjeru konzervacije i restauracije umjetničkih djela. Svojim obrazovnim i životnim iskustvima neizbježno uvodi interdisciplinarnost u svaku sferu svog rada. U aktivizmu učestvuje od sedamnaeste godine učešćem u Organizacionom odboru Montenegro prajda, a od tada je i upoznat sa radom Spektre, u kojoj trenutno obavlja funkciju službenika za komunikacije.",
    bioEng:
      "Aleksa Radonjić is an activist born in Podgorica in 2000. After finishing high school, he entered the Academy of Fine Arts of the University of Ljubljana and graduated with a degree in conservation and restoration of works of art. With his educational and life experiences, he inevitably introduces interdisciplinarity into every sphere of his work. He has been involved in activism since the age of seventeen by participating in the Organizing Committee of Montenegro Pride, and since then he has been familiar with the work of Spectra, where he currently serves as a communications officer.",
    image: "/images/team/Aleksa.jpg",
    width: "1050",
    height: "1050",
    email: "aleksaradonjic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Marija\nJovanović",
    pozicija: "Programska koordinatorka",
    role: "Program Coordinator",
    bioMne:
      "Marija je aktivistkinja iz Podgorice, rođena 1997. godine. Studentkinja je treće godina studija na smjeru psihologija Fakulteta primijenjenih nauka Univerziteta Donja Gorica. Aktivistkinja je za ljudska prava LGBTIQ osoba, feministkinja i jedna od osnivačica Asocijacije Spektra. U Spektri je angažovana na poziciji koordinatorke feminističkog programa, kroz koji realizuje projekte čiji se fokus nalazi na izgradnji kvir kulturne scene, na poljima vidljivosti i promociji feminističkih vrijednosti, kao i intersekcionalne neformalne edukacije.",
    bioEng:
      "Marija is an activist from Podgorica, born in 1997. The student is in her third year of study at the psychology department of the Faculty of Applied Sciences of the University of Donja Gorica. She is an activist for the human rights of LGBTIQ people, a feminist and one of the founders of the Spektra Association. At Spektra, she is engaged in the position of coordinator of the feminist program, through which she implements projects whose focus is on building the queer cultural scene, on the fields of visibility and promotion of feminist values, as well as intersectional informal education.",
    image: "/images/team/Marija.jpg",
    width: "1050",
    height: "1050",
    email: "marijajovanovic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Danijela\nNikić",
    pozicija: "Projektna koordinatorka",
    role: "Project Coordinator",
    bioMne:
      "Danijela Nikić je aktivistkinja iz Ulcinja, rođena 1998. Diplomirala je socijalnu politiku i socijalni rad, a trenutno je magistrandkinja u oblasti socijalne politike i socijalnog rada na Fakultetu političkih nauka Univerziteta Crne Gore. Danijela je trenutno projektna koordinatorka u Asocijaciji Spektra i nedavno se priključila programu za zagovaranje u javnosti, stičući tako dodatno iskustvo u oblasti javnog zagovaranja.",
    bioEng:
      "Danijela Nikić is an activist from Ulcinj, born in 1998. She holds a Bachelor's degree in Social Policy and Social Work, and is currently pursuing a Master's degree in the same field at the Faculty of Political Science, University of Montenegro. Danijela works as a Project Coordinator at Association Spectra  and has recently joined a public advocacy program, further expanding her experience in the field of public advocacy.",
    image: "/images/team/Danijela.jpg",
    width: "1050",
    height: "1050",
    email: "danijelanikic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Iskra\nĐurišić",
    pozicija: "Projektna asistentkinja",
    role: "Project Assistant",
    bioMne:
      "Iskra Đurišić je aktivistkinja rođena je 1999. godine u Podgorici. Završila je srednju Ekonomsko – ugostiteljsku školu u Baru. Aktivizmom se počela baviti 2021. kada je na Tik Toku javno dokumentovala svoju tranziciju. Nastavila je svoj aktivistički angažman zapošljavanjem u Asocijaciji Spektra, gdje je zaposlena kao asistentkinja u programu za rad sa zajednicom. Nedugo zatim, angažovana je i u Trans Mreži Balkan gdje radi kao voditeljica komunikacija.",
    bioEng:
      "Iskra Đurišić is an activist born in 1999 in Podgorica. She graduated from the high school of economics and catering in Bar. She began to engage in activism in 2021, when she publicly documented her transition on Tik Tok. She continued her activist engagement by being employed at Association Spectra, where she is employed as an assistant in the community work program. Not long after, she was hired at Trans Mreža Balkan, where she works as a communications manager.",
    image: "/images/team/Iskra.jpg",
    width: "1050",
    height: "1050",
    email: "iskradjurisic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Milva\nMilić",
    role: "Graphic Designer",
    pozicija: "Grafička dizajnerka",
    bioMne:
      "Milva Milić je grafička dizajnerka rođena u Crnoj Gori, Podgorici, 1998. godine. Završila je srednju školu na smjeru dizajna enterijera, a zatim je kreativni put odveo na Fakultet likovnih umjetnosti na Cetinju, gdje je završila Bachelor studije na modulu grafičke komunikacije. Trenutno je na drugoj godini master studija na Fakultetu likovnih umjetnosti na Cetinju. Završila je program stručnog osposobljavanja u Asocijaciji Spektra a trenutno u istoj radi na poziciji grafičke dizajnerke.",
    bioEng:
      "Milva Milić is a graphic designer born in 1998 in Podgorica, Montenegro. She completed her secondary education in interior design and later pursued her creative path at the Faculty of Fine Arts in Cetinje, where she earned a Bachelor's degree in Graphic Communication. She is currently in her second year of Master's studies at the same faculty. Milva completed a professional training program with the Association Spectra, where she is now employed as a graphic designer.",
    image: "/images/team/Milva.jpg",
    width: "1050",
    height: "1050",
    email: "milvamilic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Marko\nVukčević",
    pozicija: "Projektni asistent",
    role: "Project Assistant",
    bioMne:
      "Marko Vukčević je aktivista i novinar rođen 2000. godine u Podgorici. Student je treće godine osnovnih studija na Pravnom fakultetu Univerziteta Crne Gore. Dugogodišnji angažman u brojnim organizacijama koje se bave različitim društvenim temama uključujući jačanje lokalne kulturne scene, aktivizam mladih i teme tranzicione pravde, kao i bogato volonterkso iskustvo pri Spektri doveli su do zvaničnog pridruživanja Spektrinom timu na poziciji projektog asistenta.",
    bioEng:
      "Marko Vukčević is an activist and journalist born in 2000. in Podgorica. He is a third-year undergraduate student at the Faculty of Law, University of Montenegro. His long-standing engagement with numerous organizations focused on various social issues including strengthening the local cultural scene, youth activism, and topics related to transitional justice as well as extensive volunteer experience with Spectra, led to his official joining of the Spectra team as a Project Coordinator.",
    image: "/images/team/Marko.jpg",
    width: "1050",
    height: "1050",
    email: "markovukcevic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Marija\nĐurković",
    pozicija: "Finansijska menadžerka",
    role: "Financial Manager",
    bioMne:
      "Rođena je 1991. godine u Podgorici. Završila je Ekonomski fakultet u Podgorici, nakon čega je započela rad u finansijama, radeći u nevladinim organizacijama i na različitim projektima koji su uključivali finansijsko upravljanje. Posvećena je unapređenju ljudskih prava, a iskustvo u radu sa organizacijama za ljudska prava omogućilo joj je da širi pozitivne promjene u društvu. Ljubav i sloboda su joj na prvom mjestu. Finansijska je menadžerka u organizaciji Spektra.",
    bioEng:
      "Marija Đurković was born in 1991 in Podgorica. She graduated from the Faculty of Economics in Podgorica, after which she began working in finance, engaging with non-governmental organizations and various projects involving financial management. She is dedicated to the advancement of human rights, and her experience working with human rights organizations has enabled her to promote positive change in society. Love and freedom are her top priorities. She is the Financial manager at the organization Spectra.",
    image: "/images/team/Mara.jpg",
    width: "1050",
    height: "1050",
    email: "markovukcevic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
  {
    name: "Aleksandra\nKraljević",
    pozicija: "Pripravnica",
    role: "Intern",
    bioMne:
      "Aktivistkinja rođena na Cetinju 2002. godine. Nakon završetka JU Gimnazije, ambiciozno je upisala Fakultet političkih nauka u Podgorici. Stekla je zvanje Bachelor na smjeru Politikologija - Međunarodni odnosi 2024. godine. Aleksandra je trenutno dio programa stručnog osposobljavanja u Asocijaciji Spektra čime doprinosi zajednici i širi svoja znanja.",
    bioEng:
      "Aleksandra Kraljević is an activist born in Cetinje in 2002. After graduating from Junior High School, she ambitiously entered the Faculty of Political Sciences in Podgorica. She earned her Bachelor's degree in Political Science - International Relations in 2024. Aleksandra is currently part of the professional training program at the Association Spectra, contributing to the community and expanding her knowledge.",
    image: "/images/team/Aleks.jpg",
    width: "1050",
    height: "1050",
    email: "markovukcevic@asocijacijaspektra.org",
    phone: "+382 67 123 456",
  },
];

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
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    setShuffledTeamMembers(shuffleArray(teamMembers));
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

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
                        width={member.width}
                        height={member.height}
                        className={`${styles["team-image"]} ${
                          loadedImages[index] ? styles["image-loaded"] : ""
                        }`}
                        priority={index < 2}
                        loading={index < 2 ? "eager" : "lazy"}
                        quality={90}
                        onLoad={() => handleImageLoad(index)}
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
                        width={member.width}
                        height={member.height}
                        className={`${styles["team-image"]} ${
                          loadedImages[index] ? styles["image-loaded"] : ""
                        }`}
                        priority={index < 2}
                        loading={index < 2 ? "eager" : "lazy"}
                        quality={90}
                        onLoad={() => handleImageLoad(index)}
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
