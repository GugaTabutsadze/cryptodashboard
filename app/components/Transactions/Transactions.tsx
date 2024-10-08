/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Transactions.module.css"
import Button from './components/Button/Button'
import Table from './components/Content/Table'

const Transactions = ({headingText}:any) => {
  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionHeader}>
         <h1>{headingText}</h1>
         <img src='/images/profile.png' alt='/' />
      </div>
      <Button />
      <Table />
    </div>
  )
}

export default Transactions
