import React from 'react'
import styles from "./Loans.module.css"

const Loans = () => {
  return (
    <div className={styles.loansContainer}>
      <div className={styles.loanCont}>
        <span>Loan</span>
      </div>
      <p>Learn more about Loans – Keep your Bitcoin, 
        access it’s value without selling it</p>
    </div>
  )
}

export default Loans
