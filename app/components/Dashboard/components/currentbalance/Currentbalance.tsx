/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Currentbalance.module.css"

const Currentbalance = () => {
  return (
    <div className={styles.currentBalanceContainer}>
      <div className={styles.heading}>
         <div className={styles.balanceText}>
           <p>Current Price</p>
           <div>
            <h1>₹26,670.25</h1>
            <span><img src='/images/side.png' alt='/'/>0.04%</span>
           </div>
         </div>
         <div className={styles.btns}>
           <button><img src='/images/Add.png' alt='/'/>Buy</button>
           <button><img src='/images/Remove.png' alt='/' />Sell</button>
         </div>
      </div>
      <div className={styles.tabs}>
         <div className={styles.tab1}>
           <span>1H</span>
         </div>
         <div className={styles.tab2}>
            <span>1D</span>
         </div>
         <div className={styles.tab3}>
            <span>1W</span>
         </div>
         <div className={styles.tab4}>
            <span>1M</span>
         </div>
      </div>
      <div className={styles.graphs}>
          <img className={styles.vectorzone} src='/images/vector 27.png' alt='/' />
          <img src='/images/vector.png' alt='/' />
      </div>
      <div className={styles.times}>
          <span>7:15 PM</span>
          <span>12:55 AM</span>
          <span>6:35 AM</span>
          <span>12:15 PM</span>
          <span>5:55 PM</span>
      </div>
    </div>
  )
}

export default Currentbalance
