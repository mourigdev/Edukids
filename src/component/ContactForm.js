import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createClient } from '@supabase/supabase-js';

const ContactForm = () => {

    const [ successStatus, handleSuccessStatus ] = useState('unsuccess');
    const [ nameSubmit, handleNameSubmit ] = useState('');
    
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        message: Yup.string().required("Please, write your project goal."),
        email: Yup.string()
          .required("Email is required")
          .email("Entered value does not match email format"),
      });
    
      const formOptions = { resolver: yupResolver(validationSchema) };
      // get functions to build form with useForm() hook
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState;
    
      async function onSubmit(formData, e) {
    
       await fetch("https://formspree.io/f/xeqwdzkq", {
          method: "POST",
          headers: {
              'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        })
    
    
        // display form data on success
        const supabaseUrl = 'https://mhlmhnvwpdneimshbldw.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obG1obnZ3cGRuZWltc2hibGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNzA5NjMsImV4cCI6MTk5OTY0Njk2M30.iPfCab8olgfBRMgO5hwGLh2uJla-Fb2y56ON2Bs8rCA'
        const supabase = createClient(supabaseUrl, supabaseKey)
        const { data } = await supabase
        .from('clients')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          },
        ])
    
    
        // const { data } = await supabase.from('clients').insert(JSON.stringify(data))
        console.log("Message submited: " + JSON.stringify(formData));
        handleSuccessStatus('success')
        handleNameSubmit(formData.name)
        e.target.reset();
      }

  return (
    <div className='contactform'>
        <div className='form-image'>
            <p>
                <span>T:</span> 076-5428436
            </p>
            <p>
                <span>E:</span> amin@edukids.nl
            </p>
            <img src='images/contact.jpg' alt='contact'/>   
        </div>
        <div className={`form ${successStatus === 'success' ? 'formSuccess' : ''}`}>
        <div className={successStatus}> 
      <p>Bedankt dat u contact met ons opneemt {nameSubmit}</p>
    </div>
        <form onSubmit={handleSubmit(onSubmit)} className="contact_form" style={successStatus === 'success' ? {display:'none'} : {}}>

      <div className="ptf-form-group">
        {/* <label data-number="01">What’s your name?</label> */}
        <input type="text" name='name' placeholder='Naam'  {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`} />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}


      <div className="ptf-form-group">
        {/* <label data-number="03">What’s your email address?</label> */}
        <input type="text" name="email" placeholder='E-mailadres'
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        {/* <label data-number="04">Tell us about your project goals.</label> */}
        <textarea
          type="text"
          name="message"
          placeholder='Bericht'
          rows={7}
          {...register("message")}
          className={`${errors.message ? "is-invalid" : ""}`}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message?.message}</div>
        )}
      </div>

      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>
      <button className="ptf-submit-button btn" style={{width:"100%"}}>
        Submit
      </button>
      {/* End .ptf-submit-button */}
    </form>
        </div>
    </div>
  )
}

export default ContactForm
