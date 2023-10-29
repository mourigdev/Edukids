import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contact from '../component/Contact'


const Overedukids = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header></Header>
        <Hero bg="hero woman" video={false} buttons={false} header_second="OVER EDUKIDS" header="Vandaag bouwen aan morgen" text="Edukids zet zich in voor het duurzaam versterken van het onderwijs, kinderopvang en gemeentelijke diensten, met een brede focus op onderwijs, sportstimulering en educatieve programma's voor de jeugd."></Hero>
        <div className='samen-vid'>
          <Samen header="Samen voor onderwijs en meer" link={false} text1="Sinds 2020 werkt Edukids aan het duurzaam versterken van PO, VO, MBO en SO, terwijl we ook diensten aanbieden aan kinderopvangcentra en gemeenten. Wij hebben ruime ervaring met diverse specialistische doelgroepen, van SBO tot jeugdzorgplus en van VSO tot justitiële jeugdinrichting. We zorgen voor de perfecte match tussen de juiste instelling en de juiste professional."
           text2="Naast onderwijsprofessionals bemiddelen wij ook in pedagogisch geschoold personeel, zowel op incidentele basis als in projectvorm. Hetzelfde geldt voor sportprofessionals met een passie voor de jeugd. Bovendien bieden we educatieve programma's op het gebied van sport, natuur, wetenschap, cultuur, dans en meer."></Samen>
          <Video newclass="no-height" image="footer-logo.png"></Video>
        </div>
        <Contact header="“Edukids begrijpt het onderwijs en weet wat er speelt bij instellingen en professionals.”" number='87'></Contact>
        <Transparant header="Op weg naar de toekomst"
        text1="Edukids realiseert zich dat alles wat we doen, draait om de kinderen en jongeren die we ondersteunen. Daarom hanteren wij maatschappelijke tarieven en eerlijke arbeidsvoorwaarden. We investeren voortdurend in het verbeteren van onze werkwijze om instellingen zo goed mogelijk te helpen bij het oplossen van hun uitdagingen."
        text2="Dit kan alleen door de wensen en ambities van professionals centraal te stellen. Zo vinden we de juiste professional voor elke situatie en dragen we bij aan de continuïteit en kwaliteit van het onderwijs en de andere diensten die we bieden. Elk kind heeft immers recht op de beste ondersteuning en begeleiding.">
        </Transparant>
        <div className='samen-vid'>
          <Video src="292184122"></Video>
          <Samen header="Onze missie" link={false} text1='De missie van Edukids is ervoor zorgen dat instellingen altijd beschikken over enthousiaste en gemotiveerde professionals, zodat kinderen en jongeren altijd toegang hebben tot goed en inspirerend onderwijs, sportstimulering en andere educatieve activiteiten.'
          text2='Bij ons staat onderwijs voorop, maar we begrijpen dat elke instelling en professional uniek is. We kennen de diversiteit van het onderwijs en andere diensten, hebben oog voor de unieke dynamiek van het schooljaar en waarderen de verschillen tussen mensen en hun manier van werken. Dit vraagt om maatwerk, want alleen dan bereiken we de beste resultaten voor ieder kind!'
         ></Samen>
        </div>
        <Footer header="“Edukids is betrokken en begrijpt het onderwijs.”" text="Paula, leraar AVO bij een Justitiële Jeugdinrichting"></Footer>
    </div>
  )
}

export default  Overedukids
