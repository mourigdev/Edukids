import React from 'react'
import { Link } from 'react-router-dom'

const knowMore = ({two , nolist, header1, header2, list1 , list2 , list3 , list4 ,list5 , list6 ,list7 ,list8 , list9 , text1 , text2 ,text3 ,text4}) => {
  return (
    <div className='know-more-sect'>
      {list1 ? <Link to="/contact">
        <div className='box'>
          <div className='box-flex'>
            <h4 style={{width: "85%"}}>{header1}</h4>
            <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
          </div>
           <ul>
            {list1 && <li>{list1}</li>}
            {list2 && <li>{list2}</li>}
            {list3 && <li>{list3}</li>}
            {list4 && <li>{list4}</li>}
            {list5 && <li>{list5}</li>}
            {list6 && <li>{list6}</li>}
            {list7 && <li>{list7}</li>}
            {list8 && <li>{list8}</li>}
            {list9 && <li>{list9}</li>}
          </ul>  
        </div>
      </Link> :
       <Link to={"/Opdrachtgevers"} className='box'>
       <div className='box-flex'>
         <h4 style={{width: "85%"}}>{header1}</h4>
         <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
       </div>
      <p className='para home'>{nolist}</p>
      </Link>
      }
       {two ? 
       <Link to={"/Voorleraren"} className='box'>
         <div className='box-flex'>
          <h4>{header2}</h4>
          <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
         </div>
          <p className='para home'>edukids zet jouw ambities centraal. Samen vinden we de nieuwe onderwijsbaan die écht bij jou past. Krijgen waar je recht op hebt hoort daar ook bij.</p>
       </Link> :  <div className='samen-sect'>
          <h2>{header2}</h2>
          <p className='para'>{text1}</p>
          <p className='para'>{text2}</p>
          <p className='para'>{text3}</p>
          <p className='para'>{text4}</p>
        </div>
      }
    </div>
  )
}

export default knowMore
