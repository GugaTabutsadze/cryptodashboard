/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Contactus.module.css"
import Contact from './components/Contact'

const Contactus = ({}) => {
  return (
    <div className={styles.contactUsContainer}>
        <div className={styles.suportHeader}>
         <h1>Transactions</h1>
         <img src='/images/profile.png' alt='/' />
      </div>
      <Contact />
    </div>
  )
}

export default Contactus
