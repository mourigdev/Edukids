import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import KnowMore from '../component/knowMore'
import Speciaal from '../component/Speciaal'
import Regulier from '../component/Regulier'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
        <Header ></Header>
        <Hero  bg="hero background-right gradient-blacked" video={true} buttons={true} header_second="DÉ WERVINGSSPECIALIST VOOR HET ONDERWIJS EN DE KINDEROPVANG" header="Onderwijs is mensenwerk"></Hero>
        <div className='samen-vid'>
         <Samen header="samen voor kwalitatief onderwijs, kinderopvang en sportstimulering" link={true} text1="Bij Edukids zetten we ons in voor het duurzaam versterken van het onderwijs, de kinderopvang en gemeenten. Naast het werven van leraren en onderwijsondersteunend personeel, bieden wij ook services aan op het gebied van sportstimulering en educatieve programma's op het gebied van sport, natuur, wetenschap, cultuur, dans en meer. Wij zijn er trots op dat we ons vakgebied al meer dan 10 jaar door en door kennen."></Samen>
          <Video src={"292184122"}></Video>
        </div>
        <KnowMore two={true} header1="Voor scholen en kinderopvang" 
        header2="Voor pedagogen" nolist ="Ben jij op zoek naar de juiste leraar of ondersteunend personeel voor de juiste groep of functie? Bij Edukids helpen wij graag. Wij zijn betrokken en hebben oog voor detail. Of het nu gaat om speciaal of regulier onderwijs, wij bieden maatwerkoplossingen voor jouw formatie."
        text1="Edukids zet jouw ambities centraal. Samen vinden we de nieuwe pedagogische baan die écht bij jou past. Want jij verdient niets minder dan de leukste baan ter wereld.">
        </KnowMore>
        <Speciaal img="school.jpg" link={true} title="Versterk jouw formatie" text1="Heb jij last van een enorm personeelstekort, sterk toenemend verzuim of aanbesteding partners die niet meer kunnen leveren? Hierdoor staat jouw formatie onder druk. Wij begrijpen de uitdagingen waar scholen en kinderopvangorganisaties voor staan en bieden passende oplossingen. Bij Edukids vinden wij dat iedere leerling recht heeft op goed en inspirerend onderwijs en opvang, daarom helpen wij jou graag bij het oplossen van jouw onderwijs- en opvangvraag."></Speciaal>
        <Regulier img="sport_hero.jpg" link={true} title="Sportstimulering" text1="Sportstimulering is van groot belang voor de gezondheid en het welzijn van jongeren. Door sport en beweging worden niet alleen de fysieke vaardigheden ontwikkeld, maar ook sociale en mentale vaardigheden. Als Edukids dragen wij bij aan sportstimulering door het organiseren van sportactiviteiten voor kinderen en jongeren. Hierbij willen wij hen inspireren om te bewegen en hun passie voor sport te ontwikkelen. Door middel van deze activiteiten proberen wij niet alleen kinderen aan te moedigen om te sporten, maar ook om hen bewust te maken van het belang van gezonde levensstijl en goede voeding. Zo leveren wij als Edukids een belangrijke maatschappelijke bijdrage aan de gezondheid en het welzijn van kinderen en jongeren."></Regulier>
        <Contact header={"“Edukids begrijpt het onderwijs en weet wat er speelt bij instellingen en professionals.”"} number="87"></Contact>
        <Footer header={"“Edukids is betrokken en begrijpt het onderwijs.”"} text="Paula, leraar AVO bij een Justitiële Jeugdinrichting"></Footer>
    </div>
  )
}

export default Home
