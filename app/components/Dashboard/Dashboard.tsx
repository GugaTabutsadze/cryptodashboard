/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Dashboard.module.css"
import Balance from './components/balance/Balance'
import Currentbalance from './components/currentbalance/Currentbalance'
import Transaction from './components/Transaction/Transaction'
import Loans from './components/Loans/Loans'
import Contact from './components/Contacts/Contact'

const Dashboard = ({headingText}:any) => {
  return (
    <div className={styles.dashContainer}>
      <div className={styles.dashHeader}>
         <h1>{headingText}</h1>
         <img src='/images/profile.png' alt='/' />
      </div>
      <Balance />
      <div className={styles.balanceTrans}>
          <Currentbalance />
          <Transaction />
      </div>
      <div className={styles.loanContact}>
           <Loans />
           <Contact />
      </div>
    </div>
  )
}

export default Dashboard
