import React from 'react'
import './nav.css'
import { FaLinkedin,FaEnvelope,FaMapMarkerAlt,FaPhone} from "react-icons/fa";

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "88990bf4-b5a3-457c-b720-7fdf4f772f57");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <div  id="contact"className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>I'm Currently available to take on new projects,So feel free to connect</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                    <a href='https://www.linkedin.com/in/sajisri-kumar-003181248/'rel='sajisri_Linkedin'>
                    
                    <FaLinkedin size={40} color="blue"/>
               </a>
                   </div>
                    <div className='contact-detail'>
                    <a href="https://mail.google.com/mail/u/0/#inbox" rel='mail'>
                    <FaEnvelope size={38} color="red"/>
                    </a>     
                    </div>
                    <div className='contact-detail'>
                    <p> <FaMapMarkerAlt/> Address:TamilNadu,India</p>
                    </div>
                    <div className='contact-detail'>
                    <p><FaPhone /> Phone: +91 9894999881</p> 
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder='enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email'placeholder='enter your mail' name='email'/>
                <label htmlFor=''>Write your message</label>
                <textarea name='message'rows='8' placeholder='enter your message'></textarea>
                <button type='submit'className='contact-submit'>Submit </button>
            </form>
        </div>
    </div>
  )
}
