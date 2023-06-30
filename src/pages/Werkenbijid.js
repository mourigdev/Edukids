import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Hero from '../component/Hero'
import WerkenbijidSect from '../component/WerkenbijidSect'
import { createClient } from '@supabase/supabase-js';


const originalContent = [
  {
    id: 1,
    city: 'Utrecht',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een tijdelijke EN reguliere Docent Engels (ca. 0,80 fte). De school is gevestigd in de regio Utrecht en richt zich op het verzorgen van regulier voortgezet onderwijs aan alle leerniveaus.In deze specifieke functie ga je lesgeven aan leerlingen van de bovenbouw van HAVO en VWO. De 1800 HAVO en VWO leerlingen krijgen les in een modern schoolgebouw waarin veel persoonlijk contact is tussen collega's en de leerlingen. Je maakt hier dan ook deel uit van een collegiaal en gezellig team dat zich graag inzet om op innovatieve wijze het best mogelijke onderwijs te bieden aan alle leerlingen van deze openbare school.Het betreft een reguliere functie ter versterking van het team en een tijdelijke functie ter vervanging van een zieke collega, startend per direct. Vanwege de omvang van de positie is het tevens mogelijk om interesse te tonen in een deel van functie.Omdat deze onderwijsinstelling een reguliere partner is van Flexwijs weten wij goed wat er leeft op school. Dit nemen we natuurlijk mee in ons gesprek met jou zodat we samen kunnen onderzoeken of de positie aansluit op jouw wensen en competenties. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.",
    header: "Docent Engels Tijdelijk EN Regulier",
    subheader1: "Wat bieden wij",
    list1:["Arbeidsvoorwaarden conform geldende onderwijs cao" , "Schoolvakanties en feestdagen worden doorbetaald", "Pensioenregeling" , "Reiskostenvergoeding" , "Ondersteuning van een enthousiast en kundig team."],
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Engels'
  },
  {
    id: 2,
    city: 'Oost-Brabant',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Leraar AVO (ca. 1,0 fte). De school is gevestigd in de regio Oost-Brabant en richt zich op het verzorgen van speciaal onderwijs aan kinderen die extra ondersteuning nodig hebben vanwege hun gedrag.In deze specifieke functie ga je lesgeven aan leerlingen van de onderbouw en bovenbouw van het voortgezet speciaal onderwijs (VSO). Leerlingen op deze school werken toe naar een diploma waarmee ze de stap kunnen maken naar een passende vervolgopleiding binnen het regulier voortgezet onderwijs of het MBO. Om dit doel te bereiken is het voor jou als leraar belangrijk dat je zowel over de benodigde vakinhoudelijke kennis beschikt en daarnaast ook in staat bent om de verbinding te maken met de doelgroep. Afhankelijk van hun achtergrond is er bij de leerling namelijk doorgaans sprake van een achterstand op het gebied van bijvoorbeeld sociale vaardigheden en/of van een laag zelfbeeld wat zich vervolgens kan uiten in verstorend gedrag binnen en buiten de klas. Jouw leerlingen hebben dus niet alleen een leraar nodig die uitgaat van een duidelijke structuur en heldere afspraken, maar hen ook de ruimte en ondersteuning biedt om te groeien in hun persoonlijke ontwikkeling.Het betreft een reguliere functie ter versterking van het team, startend op een in onderling overleg te bepalen datum. Vanwege de omvang van de positie is het tevens mogelijk om interesse te tonen in een deel van functie.Omdat deze onderwijsinstelling een reguliere partner is van Flexwijs weten wij goed wat er leeft op school. Dit nemen we natuurlijk mee in ons gesprek met jou zodat we samen kunnen onderzoeken of de positie aansluit op jouw wensen en competenties. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.",
    header: "Leraar AVO",
    subheader1: "Wat bieden wij",
    list1:["Arbeidsvoorwaarden conform geldende onderwijs cao" , "Schoolvakanties en feestdagen worden doorbetaald", "Pensioenregeling" , "Reiskostenvergoeding" , "Ondersteuning van een enthousiast en kundig team."],
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past!Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Algemeen Vormend Onderwijs (AVO)'
    },
    {
    id: 3,
    city: 'Utrecht',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Engels (ca. 1,0 fte). De school is gevestigd in de regio Utrecht en richt zich op het verzorgen van regulier voortgezet onderwijs aan alle leerniveaus.In deze specifieke functie ga je lesgeven aan leerlingen van de onderbouw en bovenbouw van HAVO en VWO. Omdat er tevens sprake is van examenklassen is het van meerwaarde wanneer je reeds ervaring hebt met het PTA. De 1800 HAVO en VWO leerlingen krijgen les in een modern schoolgebouw waarin veel persoonlijk contact is tussen collega's en de leerlingen. Je maakt hier dan ook deel uit van een collegiaal en gezellig team dat zich graag inzet om op innovatieve wijze het best mogelijke onderwijs te bieden aan alle leerlingen van deze openbare school.Het betreft een reguliere functie ter versterking van het team en de startdatum is in overleg te bepalen. Vanwege de omvang van de positie is het tevens mogelijk om interesse te tonen in een deel van functie.Omdat deze onderwijsinstelling een reguliere partner is van Flexwijs weten wij goed wat er leeft op school. Dit nemen we natuurlijk mee in ons gesprek met jou zodat we samen kunnen onderzoeken of de positie aansluit op jouw wensen en competenties. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.",
    header: "Docent Engels",
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Engels'
    },
    {
    id: 4,
    city: 'Utrecht',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Natuurkunde (ca. 0,60 fte). De school is gevestigd in de regio Utrecht en richt zich op het verzorgen van regulier voortgezet onderwijs aan alle leerniveaus.In deze specifieke functie ga je lesgeven aan leerlingen van de onderbouw van HAVO en VWO. De 1800 HAVO en VWO leerlingen krijgen les in een modern schoolgebouw waarin veel persoonlijk contact is tussen collega’s en de leerlingen. Je maakt hier dan ook deel uit van een collegiaal en gezellig team dat zich graag inzet om op innovatieve wijze het best mogelijke onderwijs te bieden aan alle leerlingen van deze openbare school.Het betreft een reguliere functie ter versterking van het team, startend na de voorjaarsvakantie. Omdat deze onderwijsinstelling een reguliere partner is van Flexwijs weten wij goed wat er leeft op school. Dit nemen we natuurlijk mee in ons gesprek met jou zodat we samen kunnen onderzoeken of de positie aansluit op jouw wensen en competenties. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.",
    header: "Docent Natuurkunde",
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Natuurkunde'
    },
    {
    id: 5,
    city: 'Utrecht',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Nederlands (ca. 1,0 fte). De school is gevestigd in de regio Utrecht en richt zich op het verzorgen van regulier voortgezet onderwijs aan alle leerniveaus.In deze specifieke functie ga je lesgeven aan leerlingen van de onderbouw en bovenbouw van het VMBO en onderbouw HAVO. De school is gevestigd in een modern en kleinschalig schoolgebouw waarin veel persoonlijk contact is tussen collega's en de leerlingen. Je maakt hier dan ook deel uit van een collegiaal en gezellig team dat zich graag inzet om op innovatieve wijze het best mogelijke onderwijs te bieden aan alle leerlingen van deze openbare school.Het betreft een reguliere functie ter versterking van het team, startend op een in onderling overleg te bepalen datum .Omdat deze onderwijsinstelling een reguliere partner is van Flexwijs weten wij goed wat er leeft op school. Dit nemen we natuurlijk mee in ons gesprek met jou zodat we samen kunnen onderzoeken of de positie aansluit op jouw wensen en competenties. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.",
    header: "Docent Nederlands",
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Nederlands'
    },
    {
    id: 6,
    city: 'Limburg',
    text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Praktijkbegeleider Metaaltechniek (ca. 0,40 fte). De school is gevestigd in de regio Limburg en richt zich op het verzorgen van regulier middelbaar onderwijs aan alle leerniveaus.In deze specifieke functie ga je lesgeven aan studenten van MBO niveau 2 en 3 van het MBO. Je maakt deel uit van een betrokken en collegiaal team dat zich er op persoonlijke wijze voor inzet om leerlingen zo goed mogelijk hun talenten te doen ontwikkelen. Binnen het programma is er ondersteuning van een regionaal loopbaancentrum. Het toekomstgerichte onderwijs omvat volop ontwikkelingen die aansluiten op de wereld van studenten en de beroepspraktijk van vandaag en morgen. Met strategische partners wordt op innovatieve wijze actief gewerkt aan het bouwen van initiatieven. Oog voor het individu, verantwoordelijkheid en professioneel werken staan daarbij hoog in het vaandel.Het betreft een tijdelijke functie ter versterking van het team, startend per direct en in eerste instantie voor de duur van 1 jaar.",
    header: "Praktijkbegeleider Metaaltechniek",
    subheader1: "Wat bieden wij",
    list1:["Arbeidsvoorwaarden conform geldende onderwijs cao" , "Schoolvakanties en feestdagen worden doorbetaald", "Pensioenregeling" , "Reiskostenvergoeding" , "Ondersteuning van een enthousiast en kundig team."],
    subheader2: "Wie zoeken wij",
    list2:[
    "Je bent in het bezit van een geldige en relevante onderwijsbevoegdheid", 
    "Wanneer je in het afstudeerjaar zit van een relevante lerarenopleiding ben je ook van harte welkom om te solliciteren op deze positie" ,
    "Je hebt een vloeiende beheersing van de Nederlandse taal (zowel mondeling als schriftelijk)" ,
    "Relevante werkervaring binnen en/of buiten het onderwijs is natuurlijk van meerwaarde."],
    subheader3: "Over Flexwijs",
    text1:"Bij Flexwijs zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.",
    cat: 'Techniek'
    },

  ];


const Werkenbijid = () => {
  const supabaseUrl = 'https://gfiunwtxvutasehyavex.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXVud3R4dnV0YXNlaHlhdmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzMDMxMTEsImV4cCI6MjAwMDg3OTExMX0.CqCGOZEe7ytAg13zWgkEa-uBtrxB_kEVe67oTedKk7c';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [originalContent, setOriginalContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOriginalContent();
  }, []);

  const { id } = useParams();

  const fetchOriginalContent = async () => {
    try {
      const { data, error } = await supabase
        .from('works')
        .select('*')
        .eq('id', id)
        .single();


      if (error) {
        throw error;
      }

      setOriginalContent(data);
      console.log(data)
    } catch (error) {
      console.log('Error fetching original content:', error);
    }
  };

  // Check if originalContent is null before accessing the 'header' property
  // if (originalContent === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Header height={true} id="../"></Header>
      {originalContent && <Hero bg="hero pregnant" video={false} buttons={false}  header={originalContent.title} center={true}></Hero>}
      {originalContent && <WerkenbijidSect content={originalContent} />}
      <Footer no={true} id="../"></Footer>
    </div>
  )
}

export default Werkenbijid
