import React,{useEffect} from "react";
import Header from '../component/Header'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Address from '../component/Address'
import ContactForm from '../component/ContactForm'


const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header></Header>
        <Hero bg="hero bold" video={false} buttons={false} header_second="Leg contact met ons" header="Vandaag bouwen aan morgen" text="Edukids is uw partner in onderwijs, kinderopvang en sportstimulering. Bel ons voor een kennismaking of stuur een mail."></Hero>
        <h4 style={{textAlign:"center" , color:"#002c41" , fontSize:"3rem"}}>Contact</h4>
        <ContactForm></ContactForm>
        <Address></Address>
        <Footer header="“Het contact met edukids is prettig en professioneel.”" text="Marjolijn, leraar op een reboundvoorziening"></Footer>
    </div>
  )
}

export default Contact
