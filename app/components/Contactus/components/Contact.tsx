/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Contact.module.css"
import Livechat from './livechat/Livechat'

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.uperContactContainer}>
      <div className={styles.textContainer}>
         <img src='./images/Group 164.png' alt='/' />
         <p>Contact Us</p>
         <span>Have a question or just want to know more?
           Feel free to reach out to us.
         </span>
      </div>
      <div className={styles.formContainer}>
         <form className={styles.forms}>
           <div className={styles.inputs}>
             <div className={styles.form1}>
               <div>
                  <label>Name</label>
                  <input type='text' alt='/'/>
               </div>
               <div>
                   <label>Surname</label>
                   <input type='text' alt='/'/>
               </div>
             </div>
             <div className={styles.form2}>
                <label>Email</label>
                <input type='mail' alt='/' />
             </div>
             <div className={styles.form3}>
              <label>Message</label>
              <textarea placeholder='Your Message'></textarea>
             </div>
           </div>
           <div className={styles.check}>
               <input type='checkbox' />
               <label>I agree with <a href='#'>Terms & Conditions</a>.</label>
           </div>
           <div className={styles.btns}>
            <button>Send a Message</button>
            <button>Book a Meeting</button>
           </div>
         </form>
      </div>
      </div>
      
      <Livechat />
    </div>
  )
}

export default Contact
