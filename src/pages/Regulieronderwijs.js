import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contactm from '../component/Contactm'


const Opdrachtgevers = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header></Header>
        <Hero bg="hero" video={false} buttons={false} header_second="REGULIER ONDERWIJS" header="Morgen begint vandaag" text="Binnen het onderwijs staat de leerling centraal. Inspirerend en goed onderwijs geven, dat is het doel. Zodat zij zich kunnen ontwikkelen voor de dag van morgen."></Hero>
        <div className='samen-vid'>
          <Video image="speciaal.png"></Video>
          <Samen header="Samen voor het onderwijs" link={false} text1="Of je nou lesgeeft in de brugklas van het VMBO of werkt aan de examentraining voor 6 VWO, als schoolleider of leraar binnen het regulier onderwijs zet jij je elke dag in voor inspirerend en leerlinggericht onderwijs. Deze missie is overal gelijk, maar tegelijkertijd is geen school of leraar hetzelfde."
           text2="Wij kennen de diversiteit van het onderwijs, hebben oog voor de unieke dynamiek van het schooljaar en waarderen het verschil tussen mensen en hun manier van werken. Dat vraagt om maatwerk, zeker wanneer er sprake is van een uitdagend of verstoord leerklimaat. Want alleen dan kom je tot de beste leerprestaties voor de leerling."></Samen>
        </div>
        <Contact header="“Flexwijs stelt alleen onderwijsbanen voor die aansluiten op mijn wensen en ambities.”" number='82'></Contact>
        <Transparant header="Springplank naar de toekomst" text1="Als geen ander realiseert Flexwijs voor wie we het allemaal doen: de leerling. Daarom hanteren wij maatschappelijke tarieven en eerlijke arbeidsvoorwaarden. Ook investeren wij doorlopend in het verbeteren van onze werkwijze zodat wij scholen zo goed mogelijk kunnen helpen bij het oplossen van onderwijsvragen." text2="En dat lukt alleen wanneer je de wensen en ambities van leraren centraal zet. Alleen dan vind je de juiste leraar voor de juiste klas en draag je bij aan de continuïteit en kwaliteit van het onderwijs. Want of het nou tijdelijk is of met uitzicht op een vaste aanstelling, iedere leerling heeft recht op het beste onderwijs."></Transparant>
        <Contactm text={"Met een blik op de toekomst werken we allemaal samen aan het duurzaam versterken van het onderwijs. Op zoek naar een nieuwe collega of onderwijsbaan? Neem dan contact met ons op!"}></Contactm>
        <Footer header="“Dankzij Flexwijs kwam ik bij een ongelooflijk mooie school!”" text="Clio, leraar Engels binnen het voortgezet onderwijs"></Footer>
    </div>
  )
}

export default Opdrachtgevers
