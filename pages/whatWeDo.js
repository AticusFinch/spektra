import Head from "next/head";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Image from "next/image";
import styles from "./whatWeDo.module.css";
import Navigation from "./utils/navigation";
import Footer from "./utils/footer";
import Container from "./utils/container";

const WhatWeDo = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>What We Do</title>
        <meta name="description" content="What We Do" />
      </Head>
      <Navigation />
      <Container>
        <div className={styles.whatWeDo}>
          <h1 className={styles.headline}>
            {locale === "sr" ? "Čime se bavimo?" : "What we do?"}
          </h1>
          <p className={styles.text}>
            {locale === "sr"
              ? "Udruženje Spektra je feministička nevladina organizacija registrovana 2017. godine sa sjedištem u Podgorici, Crna Gora, koja djeluje širom zemlje. Organizacija je vođena od strane transrodnih i rodnovarijantnih osoba sa misijom da promoviše prvenstveno rodnu ravnopravnost sa posebnim fokusom na potrebe i doprinos zajednice trans, inter i rodno varijantnih (TIRV) osoba. Naš rad se zasniva na principima feminizma, antifašizma i intersekcionalnosti."
              : "Association Spektra is a feminist non-governmental organization registered in 2017 in Podgorica, Montenegro, with a mission to promote primarily gender equality with a special focus on the needs and contributions of the trans, inter and gender variant (TIRV) community. Our work is based on the principles of feminism, anti-fascism and intersectionality."}
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <span>Dekolonijalizam</span>
              <span>
                Spektra se oštro protivi ratovima i militarizaciji. Vjerujemo u
                rješavanje konflikata manjih ili većih dimenzija mirnim putem.
                Takođe vjerujemo u poštovanje samoodređenja ljudi, te poštovanje
                kulture i zemlje. Vjerujemo u otpor mržnji, okupaciji i
                kolonijalizaciji. Borimo se protiv eksploatacije i genocida.
              </span>
            </div>
            <div className={styles.value}>
              <span>Antinasilje</span>
              <span>
                Vjerujemo u proaktivan i transformativan pristup pravdi, koji ne
                počiva samo na smanjenju štete, već i na edukovanom
                razumijevanju i prevenciji mržnje, predrasuda i opresije u
                društvu. Kada se suočimo i propitamo predrasude i pristrasna
                ponašanja u sebi, drugima i institucijama, možemo prekinuti
                eskalaciju predrasuda i otežati procvat diskriminacije i mržnje.
              </span>
            </div>
            <div className={styles.value}>
              <span>Pacifizam i antimilitarizam</span>
              <span>
                Vjerujemo u postojanje bez praktikovanja nasilja u bilo kojem
                obliku. Oštro se protivimo svakoj praksi koja predstavlja
                fizičko, psihološko, seksualno i/ili sistemsko nasilje.
              </span>
            </div>
            <div className={styles.value}>
              <span>Samoodređenje</span>
              <span>
                Smatramo da svaka osoba ima ekskluzivno pravo da sama definiše
                svoj/e identitet/e, te se zalažemo za pravno prepoznavanje i
                poštovanje tih identiteta.
              </span>
            </div>
            <div className={styles.value}>
              <span>Feministički principi</span>
              <span>
                Vjerujemo u rodnu ravnopravnost osoba svih rodnih identiteta
                i/ili polnih karakteristika. Vjerujemo u ravnopravnost svih
                ljudi, u egalitarno društvo u kojem lične karakteristike ne
                umanjuju jednake mogućnosti.
              </span>
            </div>
            <div className={styles.value}>
              <span>Intersekcionalnost</span>
              <span>
                U našem aktivizmu vodimo se principom intersekcionalnosti koji
                prepoznaje da svi/e imamo više identiteta, te da su naša životna
                iskustva kompleksna i oblikovana i na osnovu više ličnih
                karakteristika i/ili pripadnosti različitim grupama, pri tome ne
                dajući primat nijednoj od njih. Vjerujemo u intersekcionalnost
                kao osvješćujući i osnažujući pojam, te se protivimo upotrebi
                ovog koncepta u svrhu patronizacije i (auto)viktimizacije.
              </span>
            </div>
            <div className={styles.value}>
              <span>Odgovornost</span>
              <span>
                Vjerujemo u individualnu i kolektivnu odgovornost, u princip
                odnosa brige prema radnim zadacima, prema resursima, prema sebi
                samima, prema članovima_cama tima, prema zajednici za koju
                radimo, prema društvu čiji smo članovi_ce.
              </span>
            </div>
            <div className={styles.value}>
              <span>Holizam</span>
              <span>
                Vjerujemo u sistemski pristup rješavanju problema, u posmatranje
                sitema kao cjeline, i svakog aktera kao dio sitema u kojem
                učestvuje, samim tim i prema kom ima odgovornost.
              </span>
            </div>
            <div className={styles.value}>
              <span>Povjerenje</span>
              <span>
                Vjerujemo u datost povjerenja, samim davanjem odgovornosti.
                Pretpostavljamo najbolju namjeru i vodimo se standardima etičkog
                postupanja. U slučaju kršenja povjerenja kreiramo prostor da se
                ono ponovo uspostavi.
              </span>
            </div>
            <div className={styles.value}>
              <span>Autonomnost</span>
              <span>
                Vjerujemo u ideju da se svjesne i informisane odluke ljudi
                moraju poštovati i ne smiju odbacivati, u onoj mjeri u kojoj ne
                ugrožavaju život ni donosioca/teljke odluke, ni drugih ljudi.
                Lična autonomija je, minimum, samoupravljanje slobodno od
                kontrolišućeg miješanja i ograničenja koje spriječava značajan
                izbor.
              </span>
            </div>
            <div className={styles.value}>
              <span>Poštovanje identiteta, ličnog integriteta i iskustava</span>
              <span>
                Vjerujemo u autentičnost svačijeg identiteta i iskustava, ne
                ulazeći u propitivanje istih. Smatramo da je lični integritet
                nepovredivo pravo svakog ljudskog bića, te se naročito
                posvećujemo zaštiti istog.
              </span>
            </div>
            <div className={styles.value}>
              <span>Integritet</span>
              <span>
                Donosimo odluke u skladu sa vrijednostima i ciljevima
                organizacije, ne dopuštajući kompromise koji ih mogu narušiti.
                Ne pristajemo na političke pritiske, ne trgujemo s ljudskim
                pravima, ne podržavamo one koji/e ne dijele naše vrijednosti.
              </span>
            </div>
            <div className={styles.value}>
              <span>Briga</span>
              <span>
                Za nas briga podrazumijeva koncept "Svi za jednog jedan za sve",
                te brigu o zajednici, o sebi, prema resursima koje imamo, brigu
                za kolektiv, te brigu o vrijednostima koje predstavljamo. Brigu
                doživljavamo kao politički pojam, a ne samo kao empatiju, te
                aktivno radimo na tome da kreiramo sigurne, ali i hrabre
                prostore u kojima možemo da praktikujemo etiku brige i
                solidarnosti.
              </span>
            </div>
            <div className={styles.value}>
              <span>Osnaživanje</span>
              <span>
                Vjerujemo u obezbjeđivanje i redistribuciju resursa onamo đe su
                najpotrebniji. Ne pristajemo na (auto)viktimizujuće pozicije i
                aktivno radimo da ih razmontiramo kao instrumente opresivnih
                sistema.
              </span>
            </div>
            <div className={styles.value}>
              <span>Solidarnost</span>
              <span>
                Vjerujemo u nepristrasno zauzimanje za prave vrijednosti, za
                političku solidarnost koja prevazilazi subjektivnost. Vjerujemo
                u jednaku praksu koja dolazi iz vrijednosne, a ne karakterne
                procjene.
              </span>
            </div>
            <div className={styles.value}>
              <span>Dosljednost</span>
              <span>
                Pokazujemo odgovornost time što imamo praksu po kojoj radimo, i
                opravdane izuzetke koji praksu potvrdjuju. Znamo iz kojih
                razloga radimo to što radimo, te vjerujemo u jednaku praksu koja
                dolazi iz vrijednosne, a ne situacione procjene.
              </span>
            </div>
            <div className={styles.value}>
              <span>Služba</span>
              <span>
                Vjerujemo u službu zajednici koju predstavljamo i ideji koju
                branimo i za koju se borimo. Ne služimo nametnutim opresivnim
                autoritetima, niti onima koji zauzimaju lažnu poziciju
                autoriteta nad našim ličnostima, vrijednostima i borbi.
                Vjerujemo u vrijednosti veće od nas samih.
              </span>
            </div>
            <div className={styles.value}>
              <span>Svrha</span>
              <span>Radimo za vrijednosti veće od nas samih.</span>
            </div>
            <div className={styles.value}>
              <span>Prizemnost</span>
              <span>
                Dok se vodimo vrijednostima i idejama, stojimo čvrsto na zemlji
                i držimo perspektivu na realne, kompleksne probleme sa kojima se
                zajednica susrijeće. Vodimo se idealima, postupajući strateški i
                utemeljeno u kontekstu i za najbolje interese u skladu sa
                vrijednostima koje zastupamo.
              </span>
            </div>
            <div className={styles.value}>
              <span>Različitost</span>
              <span>
                Poštujemo i podržavamo različitosti, osnažujući ideju da ljudi
                nijesu kao iz kalupa. Poštujemo različitost tijela, lica, boje
                kože i kose, mišljenja, iskustava i perspektiva.
              </span>
            </div>
            <div className={styles.value}>
              <span>Antiperfekcionizam</span>
              <span>
                Vjerujemo da je ljudski praviti greške, vjerujemo u potencijal
                da se iz njih nauči, kao i u to da ostajemo orijentisani na
                odgovornost, na lekciju, i na rezultat.
              </span>
            </div>
            <div className={styles.value}>
              <span>Feministička čast</span>
              <span>
                Čast se opisuje kao kodeks dužnosti pojedinaca i pojedinki
                unutar društvene grupe. Feministička čast redefiniše ove
                dužnosti u skladu sa feminističkim vrijednostima.
              </span>
            </div>
            <div className={styles.value}>
              <span>Transparentnost u radu</span>
              <span>
                Posvećeni smo aktivnom i kontinuiranom komuniciranju sa
                feminističkom i TIRVzajednicom i opštom javnosti, sa ciljem
                održavanja našeg rada u potpunosti transparentnim. Smatramo da
                je transparentan način rada neophodan kako bi zajednica za koju
                se zalažemo bila u svakom trenutku upoznata sa našim
                aktivnostima i razlozima iza istih.
              </span>
            </div>
            <div className={styles.value}>
              <span>Timski rad i kultura dijaloga</span>
              <span>
                Vjerujemo u aktivizam koji dolazi iz asertivne komunikacije,
                dijeljenja odgovornosti, te zajedničkog odlučivanja. Ne uzmičemo
                pred poteškoćama i konfliktima, već ih zajedno rješavamo.
              </span>
            </div>
            <div className={styles.value}>
              <span>Kritičko promišljanje</span>
              <span>
                Aktivno učestvujemo u pitanjima od značaja za TIRVQ zajednicu i
                opštu javnost, uz kritički pristup i podsticanje kritičkog
                mišljenja. Spremno dočekujemo i kritiku našeg rada, te aktivno
                radimo na unapređenju istog.
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
