/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Balance.module.css"

const Balance = () => {
  return (
    <div className={styles.dashContentContainer}>
         <div className={styles.balanceContainer}>
           <div className={styles.text1Container}>
             <div className={styles.text1}>
              <p>Total Portfolio Value</p>
              <img src='/images/info.png' alt='/' />
             </div>
             <span>₹ 112,312.24</span>
           </div>
           <div className={styles.text2Container}>
              <div className={styles.text2}>
                 <span>Wallet Balances</span>
              </div>
              <div className={styles.balance}>
                <span> 22.39401000 <img src='/images/bitcoin.png' alt='/' /></span>
                <span>₹ 1,300.00 <img src='/images/label.png' alt='/' /></span>
                
              </div>
           </div>
           <div className={styles.btnContainer}>
             <button className={styles.btn1}>
              <img src='/images/arrodown.png' alt='/'/>
              Deposit
             </button>
             <button className={styles.btn2}>
              <img src='/images/arrowup.png' alt='/' />
              Withdraw
             </button>
           </div>
         </div>
      </div>
  )
}

export default Balance
