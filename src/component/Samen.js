import React  from 'react'
import { Link } from 'react-router-dom'

const Samen = ({header , text1 , text2 , link, souHeader}) => {

  return (
    <div className='samen-sect'>
        <h2>{header}</h2>
        {souHeader && <h3 style={{color:"#002c41",marginBottom:"1.75rem"}}>{souHeader} <br /> </h3>}
        <p className='para'>{text1}</p>
        <p className='para'>{text2}</p>
       
       {link &&  <Link to={"/Overedukids"} className='learn-more-container' >
          <div className='d-flex justify-start'>
              <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
              <p className='learn-more'>Lees meer</p>
          </div>
        </Link>}
    </div>
  )
}

export default Samen
