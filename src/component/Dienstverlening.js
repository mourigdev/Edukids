import React, { useState } from 'react';
import Transparant from '../component/Transparant';
import Samen from '../component/Samen'

function Dienstverlening({items , header, description}) {


  
  const defaultOpenIndex = 0;

  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

  return (
    <div className='acc-sect'>
        <h4>{header}</h4>
        {
          // description && <Transparant header="Bemiddeling voor professionals in onderwijs, kinderopvang, sport en cultuur" text1="Als een unieke partner in onderwijs, kinderopvang en gemeenten, werkt Edukids met vaste tarieven die rekening houden met het maatschappelijke karakter van deze sectoren. Afhankelijk van uw vraag, zijn de kosten meteen duidelijk en zijn er geen verrassingen achteraf." text2="Door onze tarieven onafhankelijk te maken van individuele arbeidsvoorwaarden, kunnen organisaties altijd kiezen voor de kandidaat waarin zij het meeste vertrouwen hebben. Dit komt ten goede van de kwaliteit van onze diensten en geeft iedereen gelijke kansen, ongeacht leeftijd of ervaring."></Transparant>
          description && 
          <Samen souHeader="Bemiddeling voor professionals in onderwijs, kinderopvang, sport en cultuur" link={false}
          text1="Edukids is dé specialistische partner voor het vinden van professionals in onderwijs, kinderopvang, gemeenten en sport- en cultuurprogramma's. Wij versterken uw wervingsproces door uw vacature bij ons uitgebreide netwerk van kandidaten onder de aandacht te brengen."
          text2="Afhankelijk van uw behoeften en uitdagingen, werken we samen aan een wervingsstrategie die écht werkt en het verschil maakt voor uw organisatie. Wij verzorgen het volledige selectieproces, inclusief het in kaart brengen van de opleiding, ervaring, wensen, ambities en competenties van de kandidaat. Zo komt u alleen in contact met de beste kandidaten voor uw vacatures en kunt u snel uw nieuwe collega verwelkomen!"></Samen>
        }
        {
          description &&
          <Samen souHeader="Diverse wervings oplossingen – Afgestemd op uw behoeften" link={false}
          text1="Edukids biedt verschillende wervings oplossingen, afgestemd op de behoeften van uw organisatie. Of u nu op zoek bent naar de beste kandidaat, maximale zekerheid tegen minimale kosten, de voordeligste oplossing voor tijdelijke projecten of een partner voor uitdagende onderwijsvragen, wij hebben de juiste oplossing voor u. Onze oplossingen omvatten:"
          ></Samen>
        }
        <div className='dienstverlening'>
          
        <div className='accordion'>
          {items.map((item, index) => (
            <div key={item.id}>
              <div className={activeIndex === index ? 'accordion-header-icon active' : 'accordion-header-icon'}>
              
              {activeIndex === index ? <i class="fa-solid fa-chevron-up"></i> :   <i class="fa-solid fa-chevron-down"></i> }
                <div className='accordion-header' onClick={() => setActiveIndex(index)}>{item.header}</div>
              </div>
              {activeIndex === index && <div className='accordion-text'>{item.content}</div>}
            </div>
          ))}
        </div>
        <div className='man'>
          <img src='images/man6.png' alt='man'/>
        </div>
      </div>
      {
          description &&
          <Samen link={false}
          text1="Elk van deze oplossingen is ontworpen om u te helpen bij het vinden van de perfecte match voor uw organisatie, met optimale flexibiliteit en transparantie. Wij zijn er trots op dat we samen met u werken aan het duurzaam versterken van onderwijs, kinderopvang, sport en cultuur."
          ></Samen>
        }
    </div>
  );
}

export default Dienstverlening
