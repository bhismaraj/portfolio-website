import React from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

import { useRef } from 'react'
import { useState } from 'react';
const Contact = () => {
    const form = useRef();

    const [done, setDone] =useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_thomij3', 'template_mrlgc7d', form.current, 'Sl49PGYG2KrDu2vJN')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Me</span>

                <div className="blur s-blur"
                style={{ background: "#ABF1FF94"}}>
                </div>
            </div>
        </div>


   <div className="c-right">
   <form ref={form} onSubmit={sendEmail}>
   <input type="text" name='user_name' className='user' placeholder='Name'/>
   <input type="email" name='user_email' className='user' placeholder='Email'/>
   <textarea name="message" className='usermsg' placeholder='Message'/>
   <input type="submit" value="send" className="button1" />
   <span> {done && "Thanks for contacting me"} </span>
   <div
   className='blur c-blur1'
   style={{background: "var(--purple)"}}
   > 
   </div>

            </form>
        </div>
    </div>
  )
}

export default Contact