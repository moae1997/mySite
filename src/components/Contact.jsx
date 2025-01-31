import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ImCross } from "react-icons/im";


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_d8cim0k", "template_skvu2ma", form.current, {
        publicKey: "kQ9HGhoVcZRfPKUvx",
      })
      .then(
        () => {
          const response = document.getElementById("message");
          response.classList.remove("removeMessage");
          response.classList.add("addMessage");
          setEmail('');
          setName('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClass = ()=> {
    const response = document.getElementById("message");
    response.classList.remove("addMessage");
    response.classList.add("removeMessage");
  }


  return (
    <div className="contactForm">
      <h2>Let's Connect</h2>
      <div id='message' className='removeMessage'>
        <h3>Message sent, Thanks!!</h3>
        <button onClick={handleClass}><ImCross size={24}/></button>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" onChange={()=>{setName(event.target.value)}} value={name}/>
        <label>Email</label>
        <input type="text"  name="user_email" onChange={()=>{setEmail(event.target.value)}} value={email}/>
        <label>Message</label>
        <textarea type="text" name="message" onChange={()=>{setMessage(event.target.value)}} value={message}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}