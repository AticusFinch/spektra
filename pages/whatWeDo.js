import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Image from "next/image";
import { useState } from "react";
import styles from "./whatWeDo.module.css";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Container from "./utils/container";
import { Fade } from "react-awesome-reveal";

const WhatWeDo = () => {
  const router = useRouter();
  const { locale } = router;
  const [expandedValues, setExpandedValues] = useState({});

  const toggleValue = (valueName) => {
    setExpandedValues((prev) => ({
      ...prev,
      [valueName]: !prev[valueName],
    }));
  };

  const values = [
    {
      title: locale === "sr" ? "Dekolonijalizam" : "Decolonialism",
      description:
        locale === "sr"
          ? "Spektra se oštro protivi ratovima i militarizaciji. Vjerujemo u rješavanje konflikata manjih ili većih dimenzija mirnim putem. Takođe vjerujemo u poštovanje samoodređenja ljudi, te poštovanje kulture i zemlje. Vjerujemo u otpor mržnji, okupaciji i kolonijalizaciji. Borimo se protiv eksploatacije i genocida."
          : "Spektra strongly opposes wars and militarization. We believe in resolving conflicts of smaller or larger dimensions by peaceful means. We also believe in respecting people's self-determination, and respecting culture and country. We believe in resistance to hatred, occupation and colonialization. We fight against exploitation and genocide.",
    },
    {
      title: locale === "sr" ? "Antinasilje" : "Anti-violence",
      description:
        locale === "sr"
          ? "Vjerujemo u proaktivan i transformativan pristup pravdi, koji ne počiva samo na smanjenju štete, već i na edukovanom razumijevanju i prevenciji mržnje, predrasuda i opresije u društvu. Kada se suočimo i propitamo predrasude i pristrasna ponašanja u sebi, drugima i institucijama, možemo prekinuti eskalaciju predrasuda i otežati procvat diskriminacije i mržnje."
          : "We believe in a proactive and transformative approach to justice, which is not only based on harm reduction, but also on educated understanding and prevention of hatred, prejudice and oppression in society. When we confront and question prejudices and biased behaviors in ourselves, others and institutions, we can stop the escalation of prejudice and make it difficult for discrimination and hatred to flourish.",
    },
    {
      title:
        locale === "sr"
          ? "Pacifizam i antimilitarizam"
          : "Pacifism and anti-militarism",
      description:
        locale === "sr"
          ? "Vjerujemo u postojanje bez praktikovanja nasilja u bilo kojem obliku. Oštro se protivimo svakoj praksi koja predstavlja fizičko, psihološko, seksualno i/ili sistemsko nasilje."
          : "We believe in existence without practicing violence in any form. We strongly oppose any practice that represents physical, psychological, sexual and/or systemic violence.",
    },
    {
      title: locale === "sr" ? "Samoodređenje" : "Self-determination",
      description:
        locale === "sr"
          ? "Smatramo da svaka osoba ima ekskluzivno pravo da sama definiše svoj/e identitet/e, te se zalažemo za pravno prepoznavanje i poštovanje tih identiteta."
          : "We believe that every person has the exclusive right to define his/her own identity/s, and we stand for the legal recognition and respect of those identities.",
    },
    {
      title: locale === "sr" ? "Feministički principi" : "Feminist principles",
      description:
        locale === "sr"
          ? "Vjerujemo u rodnu ravnopravnost osoba svih rodnih identiteta i/ili polnih karakteristika. Vjerujemo u ravnopravnost svih ljudi, u egalitarno društvo u kojem lične karakteristike ne umanjuju jednake mogućnosti."
          : "We believe in gender equality for people of all gender identities and/or sexual characteristics. We believe in the equality of all people, in an egalitarian society in which personal characteristics do not diminish equal opportunities.",
    },
    {
      title: locale === "sr" ? "Intersekcionalnost" : "Intersection",
      description:
        locale === "sr"
          ? "U našem aktivizmu vodimo se principom intersekcionalnosti koji prepoznaje da svi/e imamo više identiteta, te da su naša životna iskustva kompleksna i oblikovana i na osnovu više ličnih karakteristika i/ili pripadnosti različitim grupama, pri tome ne dajući primat nijednoj od njih. Vjerujemo u intersekcionalnost kao osvješćujući i osnažujući pojam, te se protivimo upotrebi ovog koncepta u svrhu patronizacije i (auto)viktimizacije."
          : "In our activism, we are guided by the principle of intersectionality, which recognizes that we all have multiple identities, and that our life experiences are complex and shaped based on multiple personal characteristics and/or belonging to different groups, while not giving primacy to any of them. We believe in intersectionality as an enlightening and empowering concept, and we oppose the use of this concept for the purpose of patronization and (auto)victimization.",
    },
    {
      title: locale === "sr" ? "Odgovornost" : "Responsibility",
      description:
        locale === "sr"
          ? "Vjerujemo u individualnu i kolektivnu odgovornost, u princip odnosa brige prema radnim zadacima, prema resursima, prema sebi samima, prema članovima_cama tima, prema zajednici za koju radimo, prema društvu čiji smo članovi_ce."
          : "We believe in individual and collective responsibility, in the principle of caring towards work tasks, towards resources, towards ourselves, towards team members, towards the community we work for, towards the society of which we are members.",
    },
    {
      title: locale === "sr" ? "Holizam" : "Holism",
      description:
        locale === "sr"
          ? "Vjerujemo u sistemski pristup rješavanju problema, u posmatranje sitema kao cjeline, i svakog aktera kao dio sitema u kojem učestvuje, samim tim i prema kom ima odgovornost."
          : "We believe in a systemic approach to solving problems, in observing the system as a whole, and each actor as a part of the system in which he participates, and therefore to whom he has responsibility.",
    },
    {
      title: locale === "sr" ? "Povjerenje" : "Trust",
      description:
        locale === "sr"
          ? "Vjerujemo u datost povjerenja, samim davanjem odgovornosti. Pretpostavljamo najbolju namjeru i vodimo se standardima etičkog postupanja. U slučaju kršenja povjerenja kreiramo prostor da se ono ponovo uspostavi."
          : "We believe in giving trust, by giving responsibility. We assume the best intentions and are guided by standards of ethical behavior. In the event of a breach of trust, we create space for it to be re-established.",
    },
    {
      title: locale === "sr" ? "Autonomnost" : "Autonomy",
      description:
        locale === "sr"
          ? "Vjerujemo u ideju da se svjesne i informisane odluke ljudi moraju poštovati i ne smiju odbacivati, u onoj mjeri u kojoj ne ugrožavaju život ni donosioca/teljke odluke, ni drugih ljudi. Lična autonomija je, minimum, samoupravljanje slobodno od kontrolišućeg miješanja i ograničenja koje spriječava značajan izbor."
          : "We believe in the idea that people's conscious and informed decisions must be respected and must not be rejected, to the extent that they do not endanger the life of either the maker/difficult decision, or other people. Personal autonomy is, at a minimum, self-management free from controlling interference and constraints that prevent meaningful choice.",
    },
    {
      title:
        locale === "sr"
          ? "Poštovanje identiteta, ličnog integriteta i iskustava"
          : "Respect for identity, personal integrity and experiences",
      description:
        locale === "sr"
          ? "Vjerujemo u autentičnost svačijeg identiteta i iskustava, ne ulazeći u propitivanje istih. Smatramo da je lični integritet nepovredivo pravo svakog ljudskog bića, te se naročito posvećujemo zaštiti istog."
          : "We believe in the authenticity of everyone's identity and experiences, without questioning them. We believe that personal integrity is an inviolable right of every human being, and we are particularly dedicated to protecting it.",
    },
    {
      title: locale === "sr" ? "Integritet" : "Integrity",
      description:
        locale === "sr"
          ? "Donosimo odluke u skladu sa vrijednostima i ciljevima organizacije, ne dopuštajući kompromise koji ih mogu narušiti. Ne pristajemo na političke pritiske, ne trgujemo s ljudskim pravima, ne podržavamo one koji/e ne dijele naše vrijednosti."
          : "We make decisions in accordance with the values ​​and goals of the organization, not allowing compromises that could undermine them. We do not agree to political pressure, we do not trade with human rights, we do not support those who do not share our values.",
    },
    {
      title: locale === "sr" ? "Briga" : "Care",
      description:
        locale === "sr"
          ? "Za nas briga podrazumijeva koncept 'Svi za jednog jedan za sve', te brigu o zajednici, o sebi, prema resursima koje imamo, brigu za kolektiv, te brigu o vrijednostima koje predstavljamo. Brigu doživljavamo kao politički pojam, a ne samo kao empatiju, te aktivno radimo na tome da kreiramo sigurne, ali i hrabre prostore u kojima možemo da praktikujemo etiku brige i solidarnosti."
          : "For us, care implies the concept of 'All for one, one for all', and care for the community, for ourselves, according to the resources we have, care for the collective, and care for the values ​​we represent. We perceive care as a political concept, not only as empathy, and we actively work to create safe, but also brave spaces where we can practice the ethics of care and solidarity.",
    },
    {
      title: locale === "sr" ? "Osnaživanje" : "Empowerment",
      description:
        locale === "sr"
          ? "Vjerujemo u obezbjeđivanje i redistribuciju resursa onamo đe su najpotrebniji. Ne pristajemo na (auto)viktimizujuće pozicije i aktivno radimo da ih razmontiramo kao instrumente opresivnih sistema."
          : "We believe in providing and redistributing resources where they are most needed. We do not agree to (auto)victimizing positions and actively work to dismantle them as instruments of oppressive systems.",
    },
    {
      title: locale === "sr" ? "Solidarnost" : "Solidarity",
      description:
        locale === "sr"
          ? "Vjerujemo u nepristrasno zauzimanje za prave vrijednosti, za političku solidarnost koja prevazilazi subjektivnost. Vjerujemo u jednaku praksu koja dolazi iz vrijednosne, a ne karakterne procjene."
          : "We believe in impartial advocacy for true values, for political solidarity that transcends subjectivity. We believe in equal practice that comes from value, not character assessment.",
    },
    {
      title: locale === "sr" ? "Dosljednost" : "Consistency",
      description:
        locale === "sr"
          ? "Pokazujemo odgovornost time što imamo praksu po kojoj radimo, i opravdane izuzetke koji praksu potvrdjuju. Znamo iz kojih razloga radimo to što radimo, te vjerujemo u jednaku praksu koja dolazi iz vrijednosne, a ne situacione procjene."
          : "We show responsibility by having a practice that we follow, and justified exceptions that confirm the practice. We know the reasons why we do what we do, and we believe in equal practice that comes from value, not situational assessment.",
    },
    {
      title: locale === "sr" ? "Služba" : "Service",
      description:
        locale === "sr"
          ? "Vjerujemo u službu zajednici koju predstavljamo i ideji koju branimo i za koju se borimo. Ne služimo nametnutim opresivnim autoritetima, niti onima koji zauzimaju lažnu poziciju autoriteta nad našim ličnostima, vrijednostima i borbi. Vjerujemo u vrijednosti veće od nas samih."
          : "We believe in serving the community we represent and the idea we defend and fight for. We do not serve imposed oppressive authorities, nor those who occupy a false position of authority over our personalities, values ​​and struggles. We believe in values ​​greater than ourselves.",
    },
    {
      title: locale === "sr" ? "Svrha" : "Purpose",
      description:
        locale === "sr"
          ? "Radimo za vrijednosti veće od nas samih."
          : "We work for values greater than ourselves.",
    },
    {
      title: locale === "sr" ? "Prizemljenost" : "Groundedness",
      description:
        locale === "sr"
          ? "Dok se vodimo vrijednostima i idejama, stojimo čvrsto na zemlji i držimo perspektivu na realne, kompleksne probleme sa kojima se zajednica susrijeće. Vodimo se idealima, postupajući strateški i utemeljeno u kontekstu i za najbolje interese u skladu sa vrijednostima koje zastupamo."
          : "While we are guided by values ​​and ideas, we stand firmly on the ground and keep a perspective on the real, complex problems that the community faces. We are guided by ideals, acting strategically and grounded in context and for the best interests in line with the values ​​we represent.",
    },
    {
      title: locale === "sr" ? "Različitost" : "Diversity",
      description:
        locale === "sr"
          ? "Poštujemo i podržavamo različitosti, osnažujući ideju da ljudi nijesu kao iz kalupa. Poštujemo različitost tijela, lica, boje kože i kose, mišljenja, iskustava i perspektiva."
          : "We respect and support diversity, reinforcing the idea that people are not the same. We respect the diversity of bodies, faces, skin and hair color, opinions, experiences and perspectives.",
    },
    {
      title: locale === "sr" ? "Antiperfekcionizam" : "Antiperfectionism",
      description:
        locale === "sr"
          ? "Vjerujemo da je ljudski praviti greške, vjerujemo u potencijal da se iz njih nauči, kao i u to da ostajemo orijentisani na odgovornost, na lekciju, i na rezultat."
          : "We believe that it is human to make mistakes, we believe in the potential to learn from them, as well as in remaining oriented to responsibility, to the lesson, and to the result.",
    },
    {
      title: locale === "sr" ? "Feministička čast" : "Feminist honor",
      description:
        locale === "sr"
          ? "Čast se opisuje kao kodeks dužnosti pojedinaca i pojedinki unutar društvene grupe. Feministička čast redefiniše ove dužnosti u skladu sa feminističkim vrijednostima."
          : "Honor is described as a code of duties of individuals and individuals within a social group. Feminist honor redefines these duties in accordance with feminist values.",
    },
    {
      title:
        locale === "sr" ? "Transparentnost u radu" : "Transparency in work",
      description:
        locale === "sr"
          ? "Posvećeni smo aktivnom i kontinuiranom komuniciranju sa feminističkom i TIRVzajednicom i opštom javnosti, sa ciljem održavanja našeg rada u potpunosti transparentnim. Smatramo da je transparentan način rada neophodan kako bi zajednica za koju se zalažemo bila u svakom trenutku upoznata sa našim aktivnostima i razlozima iza istih."
          : "We are committed to active and continuous communication with the feminist and TIRV community and the general public, with the aim of keeping our work fully transparent. We believe that a transparent way of working is necessary so that the community we stand for is always aware of our activities and the reasons behind them.",
    },
    {
      title:
        locale === "sr"
          ? "Timski rad i kultura dijaloga"
          : "Teamwork and culture of dialogue",
      description:
        locale === "sr"
          ? "Vjerujemo u aktivizam koji dolazi iz asertivne komunikacije, dijeljenja odgovornosti, te zajedničkog odlučivanja. Ne uzmičemo pred poteškoćama i konfliktima, već ih zajedno rješavamo."
          : "We believe in activism that comes from assertive communication, sharing responsibility, and joint decision-making. We do not shrink from difficulties and conflicts, but solve them together.",
    },
    {
      title: locale === "sr" ? "Kritičko promišljanje" : "Critical thinking",
      description:
        locale === "sr"
          ? "Aktivno učestvujemo u pitanjima od značaja za TIRVQ zajednicu i opštu javnost, uz kritički pristup i podsticanje kritičkog mišljenja. Spremno dočekujemo i kritiku našeg rada, te aktivno radimo na unapređenju istog."
          : "We actively participate in issues of importance to the TIRVQ community and the general public, with a critical approach and encouraging critical thinking. We also welcome criticism of our work, and we actively work to improve it.",
    },
  ];

  return (
    <div>
      <Head>
        <title>{locale === "sr" ? "Čime se bavimo?" : "What we do?"}</title>
        <meta
          name="description"
          content={locale === "sr" ? "Čime se bavimo?" : "What we do?"}
        />
      </Head>
      <Navigation />
      <Container>
        <div className={styles.whatWeDo}>
          <Fade cascade damping={0.2} direction="up" triggerOnce>
            <h1 className={styles.headline}>
              {locale === "sr" ? "Čime se bavimo?" : "What we do?"}
            </h1>
            <p className={styles.text}>
              {locale === "sr"
                ? "Asocijacija Spektra je feministička nevladina organizacija registrovana 2017. godine sa sjedištem u Podgorici, Crna Gora, koja djeluje širom zemlje. Organizacija je vođena od strane transrodnih i rodnovarijantnih osoba sa misijom da promoviše prvenstveno rodnu ravnopravnost sa posebnim fokusom na potrebe i doprinos zajednice trans, inter i rodno varijantnih (TIRV) osoba. Naš rad se zasniva na principima feminizma, antifašizma i intersekcionalnosti."
                : "Association Spectra is a feminist non-governmental organization registered in 2017 in Podgorica, Montenegro, with a mission to promote primarily gender equality with a special focus on the needs and contributions of the trans, inter and gender variant (TIRV) community. Our work is based on the principles of feminism, anti-fascism and intersectionality."}
            </p>
          </Fade>
          <div className={styles.valuesGrid}>
            <Fade cascade damping={0.1} direction="up" delay={500} triggerOnce>
              {values.map((value, index) => (
                <div
                  key={index}
                  className={styles.value}
                  onClick={() => toggleValue(value.title)}
                >
                  <span>{value.title}</span>
                  <span
                    className={
                      expandedValues[value.title] ? styles.expanded : ""
                    }
                  >
                    {value.description}
                  </span>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
