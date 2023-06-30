import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contactm from '../component/Contactm'
import InsaneGrid from '../component/InsaneGrid'


const Lerarenonderzoek = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header></Header>
        <Hero bg="hero woman" video={false} buttons={false} header_second="LERARENONDERZOEK" header="We krijgen een 8,5!" text="Het onderwijs duurzaam willen versterken betekent altijd willen verbeteren. Dus leren we van gisteren zodat we morgen nog beter zijn dan vandaag."></Hero>
        <div className='samen-vid'>
          <Video image="speciaal.png"></Video>
          <Samen header="Trots en ambitieus" link={false} text1="Bij edukids staan we altijd open voor verbetering. Daarom vragen wij onze leraren om onze werkwijze en prestaties te beoordelen. De resultaten delen wij graag, want we zijn best trots op wat zij over ons zeggen."
           text2="Tegelijkertijd realiseren we ons dat het altijd beter kan. Daarom blijven we ons iedere dag onverminderd inzetten voor het optimaliseren van onze dienstverlening, zowel voor leraren als voor scholen. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs."></Samen>
        </div>
        <Transparant header="edukids Leraren Onderzoek" text1="Aan het einde van een dienstverband vragen wij onze leraren altijd om een enquête in te vullen waarin zij kunnen aangeven hoe zij terugkijken op onze samenwerking. Hieronder is te lezen hoe zij vinden dat wij scoren op enkele van de kernwaarden waar wij voor willen staan." text2="We zijn heel blij met de 8,5 gemiddeld die we van hen krijgen en de constatering dat 93% van onze leraren edukids zou aanbevelen bij collega’s die op zoek zijn naar een onderwijsbaan. En zelfs 97% zou ons aanbevelen bij scholen die op zoek zijn naar nieuwe onderwijscollega’s. Een rapport om trots op te zijn!"></Transparant>
        <InsaneGrid></InsaneGrid>
        <Contactm text="Met een blik op de toekomst werken we allemaal samen aan het duurzaam versterken van het onderwijs. Neem daarom contact met ons op en sla je vleugels uit binnen het regulier en Sportstimulering!"></Contactm>
        <Footer header="“Ik hoop dat we nog vaak mogen samenwerken!”" text="Leo, leraar Economie voor HAVO en VWO"></Footer>
    </div>
  )
}

export default Lerarenonderzoek
