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
      header: 'Startende leraar: Maak een vliegende start',
      content: 'Edukids is de ideale werkgever voor starters binnen het onderwijs. Niet alleen zorgen wij er samen voor dat je snel aan de slag kunt in een functie die goed bij je past, maar je krijgt als je dat wilt ook de kans om gedurende de eerste periode van je loopbaan op een aantal verschillende scholen te werken. Zo doe je veel ervaring op met allerlei uiteenlopende onderwijsdoelgroepen en maak je kennis met meerdere verschillende werkomgevingen. Deze ervaring is heel waardevol voor de rest van je loopbaan en zorgt ervoor dat je snel kunt doorgroeien.'
    },
    {
      id: 2,
      header: 'Ervaren leraar: Vind jouw ideale onderwijsbaan',
      content: 'Leraren zijn trouwe mensen die vaak vele jaren bij dezelfde school werken. Dit is een goede eigenschap, want zo is ieder schooljaar de continuïteit en kwaliteit van het onderwijs gewaarborgd. Tegelijkertijd zien we de laatste jaren dat steeds meer leraren bewust kiezen voor een nieuwe werkomgeving. Ook dit is positief voor het onderwijs, want zo vindt er een kruisbestuiving plaats waar zowel leraren als scholen baat bij hebben en wordt ruimte gecreëerd voor jonge startende leraren. Ben jij daarom ambitieus, nieuwsgierig of simpelweg gewoon toe aan een nieuwe en verfrissende en onderwijsuitdaging? Wij helpen je graag bij het verwezenlijken van deze wens!'
    },
    {
      id: 3,
      header: 'Deeltijd leraar: Wil je meer uren werken?',
      content: 'Misschien werk je al op een hele leuke school, maar wil je naast je huidige betrekking graag nog een aantal extra uren werken. Soms is hier geen ruimte voor binnen je eigen onderwijsinstelling. Kom dan gerust eens bij ons langs. Veel scholen worstelen namelijk met de invulling van kleine (tijdelijke) dienstverbanden. Wij stellen je graag voor bij deze scholen, zodat zij een ervaren werknemer hebben en jij je werkzaamheden kunt uitbreiden.'
    },
    {
      id: 4,
      header: 'Oriënterende leraar: Een nieuwe uitdaging',
      content: 'Het initiatief om uit elkaar te gaan kan ook wel eens bij een school vandaan komen. Dit kan komen door krimp van leerlingaantallen, een verminderde keuze voor jouw vak of omdat de chemie tussen jullie er gewoon niet meer is. Dat is dan even slikken, want je hebt er alles aangedaan en toch houdt het ineens op. Misschien twijfel je hierdoor aan jezelf of ben je teleurgesteld geraakt in het onderwijs in het algemeen. Besef dan goed dat elke school anders is en dat jij met jouw ervaring ontzettend veel te bieden hebt als leraar. Samen vinden we de onderwijsbaan waar jij weer met plezier en succes voor de klas staat!'
    },
    {
      id: 5,
      header: 'Zij-instromer: Onderwijs zit in je bloed',
      content: 'Zij-instromers komen regelrecht uit het veld. Dit wordt door scholen enorm gewaardeerd, want je beschikt hierdoor over een schat aan praktijkervaring en dat is van directe meerwaarde voor de kwaliteit van het onderwijs. En leerlingen vinden deze praktijkvoorbeelden ook nog eens ontzettend leuk en nuttig. Volg je een lerarenopleiding of heb je deze in het verleden al afgerond? Neem dan contact met ons op. edukids gaat ervoor om jouw onderwijsloopbaan zo snel mogelijk te lanceren, zodat je waardevolle werkervaring kunt opdoen in een baan die goed past bij jouw kennis en competenties.'
    }
  ];

  return (
    <div>
        <Header></Header>
        <Hero bg="hero vorleraren" video={false} buttons={false} header_second="VOOR PEDAGOGEN" header="Leraren creëren impact!" text="Bij Edukids wij weten als geen ander dat onderwijs mensenwerk is en daarom zetten wij jouw ambities centraal. Samen gaan we op zoek naar de baan die écht bij jou past, want jij verdient niets minder dan de leukste baan ter wereld."></Hero>
        <div className='samen-vid just4margin'>
          <Samen header="Bij Edukids begint morgen vandaag" link={false} text1="Als onderwijsprofessional wil je jonge mensen inspireren voor een vak of helpen bij het vinden van hun weg in het leven. Wanneer iemand een beroep op je doet sta je gelijk voor hen klaar, want elke dag telt in het schooljaar. Ook als zorgcoördinator, leraarondersteuner en HR-medewerker draait het jou om het maken van een verschil voor zowel de leerling als voor jouw collega's."
           text2="Bij ons staat persoonlijk contact hoog in het vaandel en zetten wij altijd jouw wensen en ambities centraal. Wij matchen dit vervolgens met het profiel van onze partnerscholen en instellingen, waarmee we vaak al jaren samenwerken. Zo vinden we samen jouw nieuwe droombaan in het onderwijs of de kinderopvang."></Samen>
          <Video image="teacher.jpg"></Video>
        </div>
        <KnowMore two={false} header1="Waarom leraren kiezen voor edukids" list1="Edukids is dé specialist in het werven van personeel voor het onderwijs, de kinderopvang en gemeenten, en biedt daarnaast services op het gebied van sportstimulering en educatieve programma's op het gebied van sport, natuur, wetenschap, cultuur, dans en meer." list2="Bij Edukids staan jouw wensen en ambities centraal en bieden we persoonlijk contact met betrokken loopbaanadviseurs." list3="Met uitgebreide ervaring binnen het PO, VO, SO en MBO begrijpen wij de behoeften van onze partnerscholen als geen ander. Hierdoor zijn wij in staat om de ideale match te vinden tussen kandidaten en werkplekken."
        list4="Wij bieden een eerlijk salaris conform de geldende onderwijs cao, inclusief doorbetaling van schoolvakanties en feestdagen, uitstekende vakantiegeldregeling en eindejaarsuitkering, aantrekkelijke reiskostenvergoeding en een moderne pensioenregeling." list5="Bij Edukids krijg je ondersteuning van een enthousiast en kundig team en bieden we open, eerlijke en betrokken begeleiding." list6="Wij zijn trots op het feit dat 90% van onze kandidaten via ons een reguliere aanstelling krijgt of binnen 1 jaar wordt overgenomen door onze partnerscholen."
        header2="Open, eerlijk en betrokken" text1 ="Werken bij Edukids betekent werken bij een organisatie die zich volledig inzet voor de ontwikkeling van kinderen. Of je nu een groepsleerkracht, pedagoog of gymleraar bent, jij hebt een belangrijke rol in het bieden van een veilige en stimulerende omgeving voor kinderen." text3="Bij Edukids werken we niet alleen in het onderwijs, maar ook in de kinderopvang en gemeenten. Daarnaast bieden we educatieve programma's aan op het gebied van sport, natuur, wetenschap, cultuur, dans en meer. We zijn altijd op zoek naar gepassioneerde en gemotiveerde professionals om ons team te versterken."
        text2 ="Bij Edukids draait alles om heldere afspraken en het bieden van waar jij recht op hebt. Denk aan een eerlijk salaris, een royale vergoeding voor reiskosten en tijdige uitbetaling van vakantiegeld. We willen geen ruimte laten voor onduidelijkheden of onaangename verrassingen in de toekomst. We behandelen je als een gewaardeerde vriend en zorgen ervoor dat alles goed en transparant geregeld is, zodat jij je volledig kunt concentreren op hetgeen waar je van houdt: lesgeven." text4="Kies voor Edukids en sla ook jouw vleugels uit! Neem contact met ons op en ontdek hoe wij jou kunnen helpen bij het vinden van jouw droombaan.">
        </KnowMore>
        <Contact header="“edukids heeft goede en eerlijke arbeidsvoorwaarden.”" number='84'></Contact>
        <Transparant header="Samen voor het onderwijs" text1="Onderwijs doe je samen. Daarom houden we goed contact met elkaar en kun je altijd bij ons terecht met al je vragen. Ook kunnen wij desgewenst actieve ondersteuning bieden door middel van de inzet van onze onderwijs- en zorgcoaches. Zo zorgen we er samen voor dat jij met plezier en succes voor de klas staat." text2="Daarnaast willen wij jou en onze scholen echt verder helpen. Dus wanneer het jouw ambitie is om een vaste baan te vinden helpen wij graag hierbij. edukids wil een springplank zijn voor jouw onderwijsloopbaan en we zijn er trots op dat veel van onze leraren vanuit een tijdelijke positie doorgroeien naar een vaste betrekking."></Transparant>
        <Dienstverlening header="Wie ben jij?" items={items}></Dienstverlening>

        <div className='samen-vid'>
          <Video newclass="no-height" image="footer-logo.png"></Video>
          <Samen header="Over edukids" link={false} text1='edukids zet zich in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst. Lees meer over onze organisatie en hoe wij al sinds 2010 de juiste leraar en de juiste school bij elkaar brengen binnen het Sportstimulering en regulier onderwijs en hoe onze leraren over ons denken.'
           text2="Benieuwd wat wij voor jou kunnen betekenen? Voel je dan vrij om te bellen naar 076-5428436 of stuur ons een berichtje. We kijken er naar uit om je te spreken!"></Samen>
        </div>
        <Footer header="“edukids is geïnteresseerd in hoe het met je gaat op school.”" text="Robin, sportdocent op het VMBO"></Footer>
    </div>
  )
}

export default Opdrachtgevers
