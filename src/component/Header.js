import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Header = ({id}) => {

  useEffect(() => {
    window.addEventListener('scroll' , handleScroll)
  } )
  

    // initialize boolean to false
    const [open , setOpen] = useState(false)


    // showHeader
    const [showHeader , setShowheader] = useState(false)



    const handleScroll = () => {
      if(window.innerWidth > 1023) {
        if (window.scrollY > 850) {
          setShowheader(true)
        } else {
            setShowheader(false)
          }
      } else {
        setShowheader(true)
      }
    }

 

  const toggleIsOpen = () => {
    // passed function to setState
    setOpen(current => !current);
  };

  return (
    // header
    <header className={showHeader ? 'header show-header' : 'header'}>
        <div className='ds-flex'>
          <div className='w-100'>
            <Link to={"/"} className="logo-container">
                <img src={id ? id + 'images/logo.png' : 'images/logo.png'} alt='logo' className='logo'/>
            </Link>
            <nav className='navigation'>
                  <ul className='first-nav'>
                    <li>
                      <Link to={"/Overedukids"}>
                        Over edukids
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Werkenbijedukids"}>
                        Werken bij edukids
                      </Link>
                    </li>
                    <li>
                      {/* this is We get an 8.5! feedback page Lerarenonderzoek
                    <Link to={"/Lerarenonderzoek"}>
                          Lerarenonderzoek
                    </Link> */}

                    <Link to={"/Sportclubs"}>
                      Sportclubs
                    </Link>
                    </li>
                  </ul>
                  <ul className='main-nav'>
                      <li>
                        <Link to={"/Opdrachtgevers"}>
                          Voor opdrachtgevers
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Voorleraren"}>
                            Voor pedagogen
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Sportstimulering"}>
                          Sportstimulering
                        </Link>
                      </li>
                      <li>
                        {/* <Link to={"/Regulieronderwijs"}>
                          regulier onderwijs
                        </Link> */}
                        <Link to={"/Werkenbij"}>
                          Vacatures
                        </Link>
                      </li>
                      <li>
                      <Link to={"/Contact"}>
                          Contact
                      </Link>
                      </li>

                  </ul>
              </nav>
            </div>
            <div className='d-flex hambu'>
              <span className='menu'>menu</span>
              <div className={open ? "is-active hamburger" : "hamburger"} id="hamburger-1" onClick={toggleIsOpen}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
              </div>
            </div>
        </div>
        <nav className={open ? "nav-mobile nav-open" : "nav-mobile"}>
             <ul className='nav-mobile-links'>
                    <li>
                      <Link to={"/Opdrachtgevers"}>
                          Voor opdrachtgevers
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Voorleraren"}>
                          Voor pedagogen
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Sportstimulering"}>
                        Sportstimulering
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Regulieronderwijs"}>
                        regulier onderwijs
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Overedukids"}>
                        Over edukids
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>
                       contact
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Werkenbijedukids"}>
                        kom ons team versterken!
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Werkenbij"}>
                        bekijk onze vacatures
                      </Link>
                    </li>
                </ul>
        </nav>
    </header>
  )
}

export default Header
