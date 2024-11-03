import React from 'react'
import contactCSS from '../Contact/Contact.module.css'

export default function Contact() {
  return (
    <div className={`${contactCSS.ContactWrapper} section`} id='contact'>
      <h2>Contact</h2>
      <p className={contactCSS.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde molestiae accusamus illo non, magni recusandae reprehenderit quas nulla possimus in quae eveniet soluta excepturi esse minima
         sint quibusdam quod? Labore pariatur quam iste velit.</p>
    <div className={contactCSS.ContactContainer}>
      
      <div className={contactCSS.Contactform}>
<h3>Get In Touch</h3>
<div className={contactCSS.inputWrapper}>
  <input type="text" placeholder='Name *' />
</div>
<div className={contactCSS.inputWrapper}>
  <input type="email" placeholder='Email *' />
</div>
<textarea placeholder='Message' ></textarea>

<button>Submit
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>
      </div>
      <div className={contactCSS.ContactInfo}>
      <div className={contactCSS.card}>
        <i className="ri-phone-line"></i>
        <h3>+92 3084286103</h3>
      </div>
      <div className={contactCSS.card}>
   <i className="ri-mail-line"></i>
   <h3>kiran@example.com</h3>
      </div>
      <div className={contactCSS.card}>
        <i className="ri-user-location-line">
          
        </i>
        <h3>Punjab, Pakistan</h3>
      </div>
      
      </div>
    </div>
    </div>
  )
}
