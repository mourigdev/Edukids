import React, { useState } from 'react'

const ContactForm = () => {
    
    const [data, setData] = useState({
        name:"",
        email: "",
        message: "",
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          name: data.name,
          email: data.email,
          message: data.message
        };
      
        const jsonData = JSON.stringify(formData);
      
        // Send jsonData to your server here using fetch or axios
      }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData((prev) => {
            return {
                ...prev , [name] : value
            }
        });
    }

  return (
    <div className='contactform'>
        <div className='form-image'>
            <p>
                <span>T:</span> 076-5428436
            </p>
            <p>
                <span>E:</span> info@edukids.nl
            </p>
            <img src='images/contact.jpg' alt='contact'/>   
        </div>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Naam' value={data.name} onChange={handleChange} />
                <input type="email" name="email" placeholder='E-mailadres' value={data.email} onChange={handleChange} />
                <textarea name="message" placeholder='Bericht' rows={7} value={data.message} onChange={handleChange} />
                <button className='btn' style={{width:"100%"}} type="submit">Versturen</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
