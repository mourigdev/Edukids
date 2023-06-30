import React  from 'react'
import { Link } from 'react-router-dom'

const Contactm = ({text, title, link}) => {

  return (
    <div className='Regulier-sect' style={{marginTop: '8rem'}}>
        <div className='regu'>
          {title ? <h4>{title}</h4> :< h4>Neem contact op met Edukids</h4>}
          <p className='para'>{text}</p>
          <Link to={"/contact"} className='learn-more-container' >
            {!link && <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Neem contact op met Edukids</p>
            </div>}
          </Link>
        </div>
        <img className='regulier-img' src='images/bold.png' alt='contact'/>
    </div>
  )
}

export default Contactm
