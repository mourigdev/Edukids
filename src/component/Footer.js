import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({header , text , no , id}) => {
  return (
    <div className='footer'>
      {!no &&   <div className="footer-1">
        <div className='footer-1-content'>
            <h2>{header}</h2>
            <p>{text}</p>
          </div> 
      </div>}
     
      <div className='footer-2'>
        <div className='footer-social'>
          <ul className='social-links'>
            <li>
              <a href='https://www.edukids.nl/'>
                <i className="fa-brands fa-facebook fa-2x me-2"></i>
              </a>
            </li>
            <li>
              <a href='https://www.edukids.nl/'>
                <i className="fa-brands fa-instagram fa-2x me-2"></i>
              </a>
            </li>
            <li>
              <a href='https://www.edukids.nl/'>
                <i className="fa-brands fa-linkedin fa-2x me-2"></i>
              </a>
            </li>
          </ul>
          <img src={id ? id + 'images/footer-logo.png' : "images/footer-logo.png"} alt='logo'/>
        </div>
      </div>
      <ul className='privacy-links'>
          <li>
            <Link to={""}>algemene voorwaarden</Link>
          </li>
          <li>
            <Link to={""}>privacy statement</Link>
          </li>
          <li>
            <Link to={"/Contact"}>contact</Link>
          </li>
      </ul>
    </div>
  )
}

export default Footer
