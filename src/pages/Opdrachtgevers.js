import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import KnowMore from '../component/knowMore'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Dienstverlening from '../component/Dienstverlening'

const Opdrachtgevers = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const items = [
    {
      id: 1,
      header: 'Samen Werven – Voor wie op zoek is naar de beste professional',
      content: 'Niet tevreden over de respons op uw vacature in onderwijs, kinderopvang, sport of cultuur? Kies dan voor Samen Werven van Edukids. Wij versterken uw wervingsproces door actief potentiële kandidaten te benaderen. Wij kennen de wensen en ambities van duizenden kandidaten, van leerkracht tot pedagogisch medewerker, van sportinstructeur tot cultuurcoördinator. Wij zijn er voor elke functie binnen uw organisatie. Dit bespaart niet alleen veel tijd, maar vergroot ook de kans op een duurzame samenwerking met uw nieuwe collega. En dat tegen een competitieve wervingsvergoeding.'
    },
    {
      id: 2,
      header: 'Zeker Werven – Werven met proeftijdgarantie',
      content: 'Met Zeker Werven krijgt u de topkwaliteit dienstverlening waar Edukids om bekend staat. Wij gaan actief op zoek naar de beste kandidaten voor uw vacature. Kandidaten die ook nog eens goed aansluiten bij het unieke karakter van uw organisatie. Daarnaast bieden wij een extra voordeel: de proeftijdgarantie. Mocht u of uw nieuwe medewerker besluiten om de arbeidsovereenkomst binnen een maand op te zeggen, dan krijgt u een deel van de wervingsvergoeding retour. Zo werken we allemaal samen aan het duurzaam versterken van onderwijs, kinderopvang, sport en cultuur.'
    },
    {
      id: 3,
      header: 'Talent Traject – Maximale zekerheid tegen minimale kosten',
      content: 'Vindt u het een te groot risico om iemand direct in dienst te nemen en wilt u niet vastzitten aan langdurige detacheringsovereenkomsten? Dan is het Talent Traject de juiste keuze. Wij hebben deze innovatieve optie speciaal ontwikkeld om de brug te vormen tussen werven en detacheren. U en uw nieuwe collega krijgen namelijk 3 maanden proeftijdgarantie om te ervaren of de samenwerking naar tevredenheid verloopt. Beide partijen enthousiast? Dan kan op ieder moment de optie worden gelicht om de medewerker versneld in eigen dienst te nemen.'
    },
    {
      id: 4,
      header: 'Deta Basis – De voordeligste oplossing voor tijdelijke projecten',
      content: 'Edukids bewijst dat detacheren binnen onderwijs, kinderopvang, sport en cultuur helemaal niet per definitie duur hoeft te zijn. Deta Basis staat voor detacheren tegen zeer concurrerende tarieven. Geen gedoe en geen kleine lettertjes. Want Edukids staat voor volledige transparantie. Zo weet u precies waar u aan toe bent en zijn er geen verrassingen achteraf. En als u de nieuwe collega zelf in dienst wilt nemen, kan dit ook nog eens tegen zeer aantrekkelijke voorwaarden. Zo behoren hoge overnamekosten eindelijk tot het verleden.'
    },
    {
      id: 5,
      header: 'Partner Plan – De beste keuze voor uitdagende vragen',
      content: 'Als u kiest voor het Partner Plan, kiest u voor maximale zekerheid en uitstekende voorwaarden. Zoals bijvoorbeeld extra flexibiliteit door een verkorte opzegtermijn en volledige dekking van het ziekterisico. Daarnaast is Edukids actief betrokken bij de uitvoering van het project door middel van gezamenlijke periodieke evaluaties en doorlopende begeleiding van de medewerker. En wanneer de samenwerking goed bevalt, heeft u ook de mogelijkheid om de nieuwe collega versneld over te nemen. Zo werken we allemaal samen aan het duurzaam versterken van onderwijs, kinderopvang, sport en cultuur.'
    }
  ];

  return (
    <div>
        <Header></Header>
        <Hero bg="hero Opdrachtgevers" video={false} buttons={false} header_second="VOOR SCHOLEN, KINDEROPVANG & GEMEENTEN" header="Edukids: waar onderwijs, opvang, sport en cultuur samenkomen" text="Bent u op zoek naar de ideale partner om uw onderwijs- en sportactiviteiten te versterken? Edukids biedt u de oplossing. Wij zijn betrokken en hebben oog voor detail en werken in het onderwijs, de kinderopvang en met gemeenten op het gebied van personeelswerving, sportstimulering en educatieve programma's."></Hero>
        <div className='samen-vid'>
          <Samen header="Persoonlijke betrokkenheid en diversiteit" link={false} text1="Edukids is uw specialistische partner voor het basisonderwijs, voortgezet onderwijs, Sportstimulering, MBO, kinderopvang en gemeenten. Wij bieden niet alleen onderwijsdiensten aan, maar ook sportstimulering en educatieve programma's op het gebied van sport, natuur, wetenschap, cultuur, dans, en meer."
           text2="Onze aanpak wordt gekenmerkt door persoonlijk contact en het besef dat elke school, kinderopvang, gemeente en kandidaat uniek is. Edukids waardeert deze diversiteit bij het oplossen van uw vragen op het gebied van onderwijs, sport en cultuur."></Samen>
          <Video image="school.jpg"></Video>
        </div>
        <KnowMore two={false} header1="Waarom kiezen scholen, kinderopvang en gemeenten voor Edukids" list1="Specialistische partner voor onderwijs, kinderopvang en gemeenten" list2="Ruime ervaring in werving en selectie binnen diverse sectoren" list3="Uitgebreid netwerk van gemotiveerde professionals" list4="Effectieve werkwijze voor de werving van zowel leraren als kandidaten voor ondersteunende en leidinggevende functies"
        list5="Alleen passende en enthousiaste kandidaten worden voorgesteld, wat u tijd en energie bespaart" list6="Regelmatig persoonlijk contact om samen het beste resultaat te bereiken" list7="U bepaalt of u de kandidaat zelf een aanstelling wilt bieden, of dat u deze via Edukids wilt laten verlopen" list8="Geen verrassingen door heldere afspraken en vaste tarieven"
        header2="Samen bouwen aan de toekomst" text1 ="Een goede professional inspireert en heeft oog voor de doelgroep, of het nu gaat om onderwijs, sport of cultuur. Daarom letten wij niet alleen op de juiste kwalificaties, maar houden wij ook rekening met de cultuur van uw organisatie en de reden achter uw vraag." text2="Wij koppelen dit aan de wensen en ambities van onze kandidaten. Met hun specifieke kennis en ervaring kunnen zij de uitdagingen aanpakken die op dat moment spelen in uw organisatie, of het nu tijdelijk is of met een vaste aanstelling in het vooruitzicht."
        text3 ="Edukids staat voor duidelijke afspraken en transparantie. Wij zijn trots op het feit dat 90% van onze kandidaten direct bij onze opdrachtgevers aan de slag gaat of vanuit een tijdelijke positie doorgroeit naar een vaste betrekking. Zo werken wij samen aan het duurzaam versterken van onderwijs, sport en cultuur.
        Onze professionals vertellen:">
        </KnowMore>
        <Contact header="Wist u dat 97% van onze professionals Edukids zou aanbevelen bij organisaties die op zoek zijn naar nieuwe collega's in onderwijs, kinderopvang en sportstimulering?" number='97'></Contact>
        <Transparant header="Eerlijk en transparant" text1="Als een unieke partner in onderwijs, kinderopvang en gemeenten, werkt Edukids met vaste tarieven die rekening houden met het maatschappelijke karakter van deze sectoren. Afhankelijk van uw vraag, zijn de kosten meteen duidelijk en zijn er geen verrassingen achteraf." text2="Door onze tarieven onafhankelijk te maken van individuele arbeidsvoorwaarden, kunnen organisaties altijd kiezen voor de kandidaat waarin zij het meeste vertrouwen hebben. Dit komt ten goede van de kwaliteit van onze diensten en geeft iedereen gelijke kansen, ongeacht leeftijd of ervaring."></Transparant>
        <Dienstverlening header="Onze dienstverlening" description="true" items={items}></Dienstverlening>
        <div className='samen-vid'>
        <Video newclass="no-height" image="footer-logo.png"></Video>
          <Samen header="Onze missie" link={false} text1='De missie van Edukids is ervoor zorgen dat instellingen altijd beschikken over enthousiaste en gemotiveerde professionals, zodat kinderen en jongeren altijd toegang hebben tot goed en inspirerend onderwijs, sportstimulering en andere educatieve activiteiten.'
          text2='Bij ons staat onderwijs voorop, maar we begrijpen dat elke instelling en professional uniek is. We kennen de diversiteit van het onderwijs en andere diensten, hebben oog voor de unieke dynamiek van het schooljaar en waarderen de verschillen tussen mensen en hun manier van werken. Dit vraagt om maatwerk, want alleen dan bereiken we de beste resultaten voor ieder kind!'
         ></Samen>
        </div>
        <Footer header="“Edukids is betrokken en begrijpt het onderwijs.”" text="Paula, leraar AVO bij een Justitiële Jeugdinrichting"></Footer>
        </div>
  )
}

export default Opdrachtgevers
