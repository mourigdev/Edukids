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
  // {
  //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  //   caption: "Sportactiviteiten in het onderwijs en de kinderopvang"
  // },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Buurtsportwerk"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Meidensport"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "Vakantie sportactiviteiten"
  }
];

const Opdrachtgevers = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

  return (
    <div>
        <Header></Header>
        <Hero bg="hero vorleraren" video={false} buttons={false} header_second="Sportstimulering" header="Sportstimulering - Jeugd in Beweging" text="Bij Edukids geloven we in de kracht van sport om de levens van kinderen en jongeren te verrijken. Wij zetten ons in om sport toegankelijk en aantrekkelijk te maken voor de jeugd door het organiseren van sportactiviteiten in het onderwijs, de kinderopvang en de gemeenschap. Ons doel is om jonge mensen actief en betrokken te houden, waardoor ze essentiële levensvaardigheden ontwikkelen en een gezonde levensstijl bevorderen."></Hero>
        <div className='samen-vid'>
          <Samen header="Sportactiviteiten in het onderwijs en de kinderopvang" link={false} text1="We werken nauw samen met scholen en kinderopvangcentra om sportactiviteiten te integreren in het dagelijkse curriculum. Onze ervaren sportinstructeurs en -coaches bieden een breed scala aan sporten aan, zodat kinderen de kans krijgen om verschillende sporten te ontdekken en hun talenten te ontwikkelen. Van teamspelen tot individuele sporten, wij streven ernaar om elke leerling en kind te betrekken en enthousiast te maken over sport."
           text2="Aanbod: Kleuters; Sport & Spel; Dans; Multisport; Balsport; Yoga; Bootcamp; Racketmix; Atletiek; Turnen; American Football"></Samen>
          <Video src="292184122" image="regulier.jpg"></Video>
        </div>
        {/* <div className='slidebody'> */}
        {/* <Slider heading="Example Slider" slides={slideData} /> */}
        <Slider data={data} />
        {/* <Slidee data={dataa}/> */}
        {/* </div> */}
        {/* <Speciaal
        idd="a0"
        title={"Sportactiviteiten in het onderwijs en de kinderopvang"} 
        text1={"We werken nauw samen met scholen en kinderopvangcentra om sportactiviteiten te integreren in het dagelijkse curriculum. Onze ervaren sportinstructeurs en -coaches bieden een breed scala aan sporten aan, zodat kinderen de kans krijgen om verschillende sporten te ontdekken en hun talenten te ontwikkelen. Van teamspelen tot individuele sporten, wij streven ernaar om elke leerling en kind te betrekken en enthousiast te maken over sport."}
        text2={"Aanbod: Kleuters+; Sport & Spel; Dans; Multisport; Balsport; Yoga; Bootcamp; Racketmix; Atletiek; Turnen; American Football"}
        ></Speciaal> */}
        <Regulier
        idd="a0"
        title="Buurtsportwerk"
        text1="Edukids is zich bewust van het belang van sport in lokale gemeenschappen. Daarom organiseren we buurtsportactiviteiten om kinderen en jongeren een veilige en uitnodigende omgeving te bieden om te sporten. Onze activiteiten zijn gericht op het bevorderen van sociale cohesie, het verbeteren van motorische vaardigheden en het opbouwen van zelfvertrouwen"></Regulier>
        <Speciaal
        idd="a1"
        title="Meidensport"
        text1="Bij Edukids vinden we het belangrijk om meisjes te stimuleren en te motiveren om deel te nemen aan sport. We organiseren speciale meidensportactiviteiten om een veilige en ondersteunende omgeving te creëren, waar meisjes zich vrij voelen om nieuwe sporten te proberen en hun vaardigheden te ontwikkelen. Onze vrouwelijke sportcoaches en -instructeurs fungeren als rolmodellen en inspireren meisjes om hun volledige potentieel te bereiken."
        ></Speciaal>
        <Regulier
        idd="a2"
        title="Vakantie sportactiviteiten"
        text1="Vakanties zijn de perfecte tijd voor kinderen en jongeren om hun sportieve vaardigheden te ontwikkelen en plezier te hebben. Edukids biedt vakantie sportactiviteiten voor verschillende leeftijdsgroepen, waarin sport en spel centraal staan. Onze activiteiten variëren van sportkampen tot eendaagse evenementen, zodat de jeugd actief en betrokken blijft tijdens de schoolvakanties."
        text2={"Edukids is toegewijd aan het verbeteren van de levens van kinderen en jongeren door sport. Sluit je aan bij ons streven om een gezonde, actieve en betrokken generatie te creëren. Neem vandaag nog contact met ons op om te ontdekken wat wij voor uw school, kinderopvang of gemeenschap kunnen betekenen."}
        ></Regulier>
        <Contact header="“Edukids begrijpt het onderwijs en weet wat er speelt bij instellingen en professionals.”" number='86'></Contact>
        <Transparant header="Van talent naar professional" text1="Al sinds 2010 zet edukids zich in voor een grote diversiteit aan specialistische doelgroepen. Van SBO tot jeugdzorgplus en van VSO tot justitiële jeugdinrichting helpen wij bij het oplossen van hiaten in het onderwijsteam en inspireren wij mensen met een talent voor uitdagende en kwetsbare doelgroepen." text2="Dit doen wij in nauwe samenwerking met onze zusterorganisatie Careflex Zorg Groep, specialist op het gebied van complexe zorgverlening. Samen is het onze ambitie om mensen te laten groeien tot professional in het Sportstimulering, waarin wij de springplank mogen zijn naar een vaste baan."></Transparant>
        <Contactm text="Met onze blik gericht op de toekomst, bundelen we onze krachten om het onderwijs duurzaam te versterken. Ben je op zoek naar een nieuwe collega of een uitdagende baan in het onderwijs? Neem dan nu contact met ons op!"></Contactm>
        <Footer header="“Een fijne samenwerking: betrokken, open en eerlijk.”" text="Jeroen, leraar Techniek in het Sportstimulering"></Footer>
    </div>
  )
}

export default Opdrachtgevers
