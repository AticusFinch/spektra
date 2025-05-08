import styles from "./ourTeam.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "./utils/container";
import Footer from "./utils/footer";
import Navigation from "./utils/navigation";

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

function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const shuffledTeamMembers = shuffleArray(teamMembers);

const OurTeam = () => {
  const router = useRouter();
  const { locale } = router;

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
                        src={member.image} // Route of the image file
                        alt="team-member"
                        width={member.width} // Specify the width of the image
                        height={member.height} // Specify the height of the image
                        className={styles["team-image"]}
                      />
                    </div>
                    <div className={styles["team-member-content-container"]}>
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
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles["team-member-content-container"]}>
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
