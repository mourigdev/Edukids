import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Footer from '../component/Footer'


const Werkenbijedukids = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header></Header>
        <Hero bg="hero pregnant" video={false} buttons={false} header_second="WERKEN BIJ EDUKIDS" header="Versterk ons team!" text="Ben jij maatschappelijk betrokken en wil je het verschil maken in het onderwijs, de kinderopvang en de sportstimulering? Edukids is op zoek naar nieuwe collega's om ons groeiende team te versterken!"></Hero>
        <div className='samen-vid'>
          <Samen header="Over Edukids" link={false} text1="Edukids is een expert op het gebied van personeelsdiensten voor het onderwijs, kinderopvang en gemeenten. Wij ondersteunen niet alleen op onderwijsgebied, maar bieden ook diensten aan op het gebied van sportstimulering en educatieve programma's in sport, natuur, wetenschap, cultuur, dans en meer. We organiseren evenementen ter promotie van onze diverse diensten."
           text2="Edukids is een jonge, dynamische organisatie die staat voor kwaliteit en persoonlijk contact. Ons team is gezellig, toegankelijk, sociaal en maatschappelijk betrokken. We werken samen om topprestaties te leveren voor onze partners en professionals."></Samen>
          <Video newclass="no-height" image="footer-logo.png"></Video>
        </div>
        <div style={{textAlign: 'center', fontWeight:"bold" , fontSize:"1.1rem" , color:"#002c41"}}>VACATURES</div>
        <div className='samen-vid'>
          <Video image={'teacher.jpg'}></Video>
          <Samen link={false} text1="Dagelijks streven we ernaar om onze partners zo goed mogelijk van dienst te zijn en onze medewerkers de aandacht te geven die ze verdienen, zodat zij op elk moment hoogwaardige diensten kunnen bieden aan kinderen, jongeren en gemeenschappen van alle achtergronden."
           text2="Meer weten? Op onze website vind je alles over onze organisatie en hoe wij sinds 2020 de juiste professional en de juiste instelling bij elkaar brengen. Je kunt ook lezen hoe onze professionals over ons denken. Bekijk ook de leuke posts over onze werkwijze, missie en georganiseerde evenementen."></Samen>
        </div>
        <div className='samen-vid'>
          <Samen header={'Word jij onze nieuwe collega?'} link={false} text1="Ben jij oplossingsgericht, initiatiefrijk en maatschappelijk betrokken? Beschik je over sterke communicatieve vaardigheden, een scherp geheugen en oog voor detail? Word je door jouw omgeving omschreven als een energieke en positief ingestelde doorzetter die mensen altijd blij en enthousiast maakt?"
           text2="Solliciteer dan nu, we kijken ernaar uit om je te leren kennen!"></Samen>
          <Video image={"speciaal.png"}></Video>
        </div>
        <Footer header="“Edukids is betrokken en begrijpt het onderwijs.”" text="Paula, leraar AVO bij een Justitiële Jeugdinrichting"></Footer>
    </div>
  )
}

export default   Werkenbijedukids
