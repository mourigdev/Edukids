import React from 'react'

const WerkenbijidSect = ({content}) => {

  // if (typeof content === 'undefined' || !Array.isArray(content)) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className='WerkenbijidSect'>
        <h2>{content.title && content.title}</h2>
        <p className='city'>{content.city && content.city}</p>
        <p className='para'>{content.description && content.description}</p>
        <h4 className='subheader'>{content.wat_bieden_wij && 'Wat bieden wij'}</h4>
       <ul>
         {content.wat_bieden_wij && content.wat_bieden_wij.map((li) => (
            <li>{li}</li>
          ))}
        </ul> 
        <h4 className='subheader'>{content.wie_zoeken_wij && "Wie zoeken wij"}</h4>
       <ul>
         {content.wie_zoeken_wij && content.wie_zoeken_wij.map((li) => (
            <li>{li}</li>
          ))}
        </ul> 
        <h4 className='subheader'>Over Edukids</h4>
        <p className='para'>Bij Edukids zetten we ons al ruim 10 jaar in voor mensen die niets liever willen dan werken in het speciaal en regulier onderwijs. Wij gaan uit van persoonlijk contact, onderwijs is immers mensenwerk. Op deze manier gaan wij er ieder dag opnieuw voor om de juiste kandidaat en de juiste school bij elkaar te brengen zodat leerlingen altijd toegang hebben tot goed en inspirerend onderwijs. Hierbij zetten we jouw unieke talenten en ambities centraal, zodat we samen een nieuwe onderwijsbaan vinden die écht bij jou past! Wil je meer weten over Flexwijs? Bekijk dan de vrolijke animatie over onze duurzame werkwijze of volg ons op LinkedIn.</p>
    </div>
  )
}

export default WerkenbijidSect
