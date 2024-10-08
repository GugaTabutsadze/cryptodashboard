/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Transaction.module.css"

const Transaction = () => {
  return (
    <div className={styles.transactionContainer}>
      <span className={styles.transHeader}>Recent Transactions</span>
      <div className={styles.currentTransactionsContainer}>
        <div className={styles.list1}>
           <div className={styles.icon1}>
             <img src='/images/usd.png' alt='/' />
           </div>
           <div className={styles.content1}>
             <div>
               <span className={styles.upperText}>INR Deposit</span>
               <span className={styles.lowerText}>2022-06-09 7:06 PM</span>
             </div>
             <div>
               <span className={styles.upperText}>+ ₹81,123.10</span>
             </div>
           </div>
        </div>
        <div className={styles.list2}>
           <div className={styles.icon1}>
             <img src='/images/bitcoin.png' alt='/' />
           </div>
           <div className={styles.content1}>
              <div>
                 <span className={styles.upperText}>BTC Sell</span>
                 <span className={styles.lowerText}>2022-05-27 12:32 PM</span>
              </div>
              <div>
                 <span className={styles.upperText}>- 12.48513391 BTC</span>
                 <span className={styles.lowerText}>+ $81,123.10</span>
              </div>
           </div>
        </div>
        <div className={styles.list3}>
           <div className={styles.icon1}>
             <img src='/images/usd.png' alt='/' />
           </div>
           <div className={styles.content1}>
            <div>
               <span className={styles.upperText}>INR Deposit</span>
               <span className={styles.lowerText}>2022-06-09 7:06 PM</span>
            </div>
            <div>
               <span className={styles.upperText}>+ ₹81,123.10</span>
            </div>
           </div>
        </div>
      </div>
      <button>View All</button>
    </div>
  )
}

export default Transaction
