import React from 'react'

const Address = () => {
  return (
    <div className='address'>
        <div className='Adres'>
            <h4>Adres</h4> 
            <p className='para'>Edukids</p>
            <p className='para'>Hoendiepstraat 10-1</p>
            <p className='para'>1079LT Amsterdam</p>
        </div>
        <div className='openbaar'>
            <h4>Bezoek de wereld van Edukids</h4> 
            <p className='para'>Wij zijn gevestigd in Regus - Cityside. Kom gezellig langs voor koffie, lunch en service met een glimlach!</p>
        </div>
        <div className='bedrijfsinformatie'>
            <h4>Bedrijfsinformatie</h4>
            <div className='para'>
                <p>KVK:   <span>80659624</span> </p>
                <p>BTW:   <span>NL003466730B38</span>  </p>
                <p>IBAN:  <span>:NL38 INGB 0670 9040 07</span>  </p>
                
                
            </div>
        </div>
    </div>
  )
}

export default Address
