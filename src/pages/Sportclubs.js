import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contactm from '../component/Contactm'
import Speciaal from '../component/Speciaal'
import Regulier from '../component/Regulier'
import Slider from '../component/Slider'
import Slidee from '../component/Slidee'


const dataa = [
  {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Buurtsportwerk",
      description: "",
      button: "Meer informatie",
      index: "1",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    title: "fdfd",
    description: "",
    button: "Meer informatie",
    index: "2"
},
  {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "fdfd",
      description: "",
      button: "Meer informatie",
      index: "3",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    title: "fdfd",
    description: "",
    button: "Meer informatie",
    index: "4"
},
]

const data = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "Voetbalclub"
  },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Basketbalclub"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Volleybalclub "
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "Handbalclub "
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "Korfbalclub "
  },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Tennis en Badminton Clubs"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Tafeltennisclub "
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "Turnclub "
  }
];

const Sportclubs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

  return (
    <div>
        <Header></Header>
        <Hero bg="hero vorleraren" video={false} buttons={false} header_second="Sportclubs" header="Sportclubs - Een Wereld van Sportplezier" text={`Bij Edukids geloven wij dat sporten niet alleen goed is voor de gezondheid, maar ook voor de sociale ontwikkeling van kinderen. Daarom hebben wij in samenwerking met partners uit verschillende wijken in Amsterdam diverse sportclubs opgezet met het motto "voor de wijk door de wijk".`}></Hero>
        <div className='samen-vid'>
          <Samen header="Sportclubs van topkwaliteit!" link={false} text1="Al onze sportclubs hebben professionele trainers in dienst die in het bezit zijn van de juiste diploma's en ervaring hebben in de desbetreffende sporten. Hierdoor kunnen wij kinderen de beste kwaliteit sportlessen bieden."
           text2="Onze grootste sportclub is de Multisportclub waar kinderen kennis kunnen maken met verschillende sporten zoals voetbal, basketbal, volleybal, handbal, korfbal, tennis, badminton, tafeltennis, turnen en american football. Op deze manier kunnen kinderen ontdekken welke sport het beste bij hen past en tegelijkertijd hun motorische vaardigheden ontwikkelen."></Samen>
          <Video src="292184122" image="regulier.jpg"></Video>
        </div>
        {/* <div className='slidebody'> */}
        {/* <Slider heading="Example Slider" slides={slideData} /> */}
        <Slider data={data} />
        {/* <Slidee data={dataa}/> */}
        {/* </div> */}
        <Speciaal
        idd="a0"
        title={"Voetbalclub - Voed je Passie voor het Spel"} 
        text1={"Naast de Multisportclub bieden wij ook specifieke sportclubs zoals onze voetbalacademie, waar kinderen onder begeleiding van gekwalificeerde trainers hun voetbalvaardigheden kunnen verbeteren."}
        text2={"we regelmatig mogelijkheden voor wedstrijden en toernooien, zodat spelers hun vaardigheden in de praktijk kunnen brengen en tegelijkertijd plezier kunnen hebben in een competitieve omgeving. Onze voetbalclub is de ideale plek voor jonge voetballers om hun passie voor het spel te ontdekken en te groeien in een ondersteunende en stimulerende omgeving."}
        ></Speciaal>
        <Regulier
        idd="a1"
        title="Basketbalclub - Ontketen je Vaardigheden op het Veld"
        text1="In onze basketbalclub krijgen kinderen de kans om hun liefde voor basketbal te koesteren en hun vaardigheden naar een hoger niveau te tillen. Onder begeleiding van ervaren coaches, zullen ze hun dribbel-, schiet- en verdedigingstechnieken verfijnen, terwijl ze ook waardevolle teamwork- en leiderschapsvaardigheden ontwikkelen."
        text2="We organiseren regelmatig interne wedstrijden en nemen deel aan basketbaltoernooien, waar onze spelers de kans krijgen om hun talenten te laten zien en zichzelf te meten met andere teams. Onze basketbalclub is een energieke en ondersteunende omgeving waar jonge spelers hun passie voor het spel kunnen cultiveren en kunnen groeien als individuen en als teamspelers."
        ></Regulier>
        <Speciaal
        idd="a2"
        title="Volleybalclub - Sla je Passie Over het Net"
        text1="Ook hebben wij een volleybalclub waar kinderen leren samenspelen en hun volleybal vaardigheden verbeteren."
        text2="we een positieve en ondersteunende omgeving waarin kinderen vriendschappen kunnen opbouwen, zelfvertrouwen kunnen ontwikkelen en plezier kunnen hebben tijdens het spelen van dit geweldige spel. Of ze nu beginners zijn of al enige ervaring hebben, onze volleybalclub biedt een geweldige kans om de volleybalvaardigheden te verbeteren en te genieten van de opwinding van het spel."
        ></Speciaal>
        <Regulier
        idd="a3"
        title="Handbalclub - Sla een Doelpunt in Passie"
        text1="Voor de fanatieke handballers hebben wij een handbalclub waar kinderen leren gooien, vangen en mikken."
        text2={"We leggen de nadruk op teamwork, communicatie en strategie, zodat kinderen niet alleen hun individuele vaardigheden ontwikkelen, maar ook leren samenwerken als een hecht team. Onze handbalclub biedt regelmatige trainingssessies en deelname aan wedstrijden en toernooien, waardoor spelers de kans krijgen om hun vaardigheden in de praktijk te brengen en hun passie voor handbal te laten zien."}
        ></Regulier>
        <Speciaal
        idd="a4"
        title={"Korfbalclub - Versterk je Samenspel en Schiet naar Succes"} 
        text1={"Daarnaast bieden wij ook korfbal lessen aan waar kinderen leren samenwerken en hun korfbal vaardigheden kunnen verbeteren."}
        text2={"In onze korfbalclub krijgen kinderen de kans om de veelzijdige sport van korfbal te ontdekken en hun vaardigheden in het spel te verbeteren. Onder begeleiding van ervaren trainers leren ze de technieken van schieten, passen, verdedigen en samenwerken. Korfbal is een unieke sport waarin jongens en meisjes samen spelen in gemengde teams, wat teamwork en gelijkheid bevordert."}
        ></Speciaal>
        <Regulier
        idd="a5"
        title="Tennis en Badminton Clubs - Beheers de Slag en Raak de Shuttle"
        text1="Tennisliefhebbers kunnen bij ons terecht bij onze tennisclub waar kinderen onder begeleiding van professionele trainers leren tennissen. Voor de badmintonners bieden wij een badmintonclub aan waar kinderen leren slaan en spelen."
        text2="Of het nu tennis of badminton is, onze sportclubs zorgen ervoor dat kinderen zich kunnen onderdompelen in de wereld van de racketsporten, waar ze niet alleen technische vaardigheden zullen verbeteren, maar ook waardering zullen ontwikkelen voor competitie, samenwerking en sportiviteit. Sluit je aan bij onze tennis- of badmintonclub en ontdek de vreugde van het beoefenen van deze fantastische sporten!"
        ></Regulier>
        <Speciaal
        idd="a6"
        title="Tafeltennisclub - Sla de Bal en Verover de Tafel"
        text1="In onze tafeltennisclub kunnen tafeltennisfans hun vaardigheden verfijnen en plezier beleven aan dit snelle en uitdagende spel. Onder begeleiding van ervaren trainers leren kinderen omgaan met het batje en de bal, ontwikkelen ze hun slagtechnieken en verbeteren ze hun balans en hand-oog coördinatie."
        text2="Onze tafeltennisclub biedt een stimulerende omgeving waarin kinderen kunnen groeien als spelers, strategisch denken kunnen ontwikkelen en kunnen genieten van spannende wedstrijden met medespelers. Sluit je aan bij onze tafeltennisclub en ontdek de opwinding en behendigheid van dit geweldige spel."
        ></Speciaal>
        <Regulier
        idd="a7"
        title="Turnclub - Verleg je Grenzen en Schitter op de Vloer"
        text1="In onze turnclub kunnen turnliefhebbers hun passie voor beweging en acrobatiek tot uiting brengen. Kinderen leren de kunst van springen, draaien, balanceren en het uitvoeren van gracieuze bewegingen op verschillende toestellen. Onder begeleiding van ervaren trainers ontwikkelen ze kracht, flexibiliteit, coördinatie en zelfvertrouwen"
        text2={"Sluit je aan bij onze turnclub en ontdek de gratie en kracht van het turnen, of doe mee met onze american football club en ervaar de intensiteit en teamgeest van deze geweldige sport."}
        ></Regulier>
        <Contact header="“Edukids begrijpt het onderwijs en weet wat er speelt bij instellingen en professionals.”" number='86'></Contact>
        <Transparant header="Van talent naar professional" text1="Al sinds 2010 zet edukids zich in voor een grote diversiteit aan specialistische doelgroepen. Van SBO tot jeugdzorgplus en van VSO tot justitiële jeugdinrichting helpen wij bij het oplossen van hiaten in het onderwijsteam en inspireren wij mensen met een talent voor uitdagende en kwetsbare doelgroepen." text2="Dit doen wij in nauwe samenwerking met onze zusterorganisatie Careflex Zorg Groep, specialist op het gebied van complexe zorgverlening. Samen is het onze ambitie om mensen te laten groeien tot professional in het Sportstimulering, waarin wij de springplank mogen zijn naar een vaste baan."></Transparant>
        <Contactm text="Met onze blik gericht op de toekomst, bundelen we onze krachten om het onderwijs duurzaam te versterken. Ben je op zoek naar een nieuwe collega of een uitdagende baan in het onderwijs? Neem dan nu contact met ons op!"></Contactm>
        <Footer header="“Een fijne samenwerking: betrokken, open en eerlijk.”" text="Jeroen, leraar Techniek in het Sportstimulering"></Footer>
    </div>
  )
}

export default Sportclubs
