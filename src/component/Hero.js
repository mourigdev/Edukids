import React , { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const Hero = ({bg , video , buttons , header_second , header , text , center}) => {
  // hover effect
  const [isShown, setIsShown] = useState(false);
  const [open , setIsOpen] = useState(false);

  const modalRef = useRef(null);





  // openmodal
  const openmodal = () => {
    // passed function to setState
    setIsOpen(true);
  }

  const closeModal = (e) => {
    setIsOpen(false);

    if (e.target === modalRef.current) {
      setIsOpen(false);
    }
  }


  return (
    <div className={bg}>
        <div className='hero-content'>
            <h4 className='subtitle'>{header_second}</h4>
            <h1 className={center && "center"}>{header}</h1>
            { buttons && 
            <div className='grid'>
                <Link className='btn-outline'  to={"/Opdrachtgevers"}>voor opdrachtgevers</Link>
                <Link className='btn-outline'  to={"/Voorleraren"}>voor pedagogen</Link>
                <Link className='btn-outline' to={"/Sportstimulering"}>Sportstimulering</Link>
                {/* <Link className='btn-outline' to={"/Regulieronderwijs"}>regulier onderwijs</Link> */}
                <Link className='btn-outline'  to={"/Werkenbij"}>actuele vacatures </Link>
            </div>
            }
            {video ? 
            <div className='d-flex justify-start vid-open-container' onClick={openmodal} onMouseEnter={() => setIsShown(true)} 
              onMouseLeave={() => setIsShown(false)}>
              <i className= {isShown ? "fa-solid fa-circle-play fa-2x  color-primary" : "fa-regular fa-circle-play fa-2x color-primary" }></i>              
              <p className='vid-open'>Bekijk onze video</p>
            </div> : <p style={{maxWidth: "40rem" , lineHeight: "1.75rem" , fontSize: "1.05rem"}}>{text}</p>
            }
            <div>
           
                {/* Modal */}
                {open && (
                  <div className="modal-wrapper" onClick={closeModal} ref={modalRef}>
                    <button  onClick={closeModal}>&times;</button>
                     <div className="modal">
                      <div className="modal-body">
                          <iframe title='vid2' className='video1' allow='autoplay' allowFullScreen frameBorder="0" src='https://player.vimeo.com/video/292387887'></iframe>
                      </div>
                    </div>
                  </div>
                )}
                </div>

        </div>
        <ul className={open ? 'social-hero z-1' : "social-hero" }>
            <a href='tel:0765428436'>
              <div className='flex'>
                <li>
                    <i className="fa-solid fa-phone"></i>
                </li>
                <span className='social-text'>Bel met edukids</span>
              </div>
            </a>
            <Link to={"/Werkenbij"}>
            {/* <a href='#'> */}
              <div className='flex'>
                <li>
                    <i className="fa-solid fa-chalkboard-user"></i>
                </li>
                <span className='social-text'>Bekijk onze vacatures</span>
              </div>
            {/* </a> */}
            </Link>
            <a target='_blank' href='https://www.linkedin.com/company/edukidsnl'>
              <div className='flex'>
                <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <span className='social-text'>Volg ons op LinkedIn</span>
              </div>
            </a>
          </ul>

          
    </div>
  )
}

export default Hero
