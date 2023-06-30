import React  from 'react'
import { Link } from 'react-router-dom'

const Regulier = ({title , text1, text2 , link, idd}) => {

  return (
    <div className='Regulier-sect'>
        <div className='regu'>
        {idd ? 
        <div id={idd}>
          <h4>{title}</h4>
          <p className='para'>{text1}</p>
          {text2 && <p className='para'>{text2}</p>}
        </div> : 
        <div>
          <h4>{title}</h4>
          <p className='para'>{text1}</p>
          {text2 && <p className='para'>{text2}</p>}
        </div>}
          {/* <h4>{title}</h4>
          <p className='para'>{text1}</p> */}
          {link && <Link to={"/Regulieronderwijs"} className='learn-more-container' >
            <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Lees meer</p>
            </div>
          </Link>}
        </div>
        <img className='regulier-img' src='images/regulier.jpg' alt='Regulier'/>
    </div>
  )
}

export default Regulier
