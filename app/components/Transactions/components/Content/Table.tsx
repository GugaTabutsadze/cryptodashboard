/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Table.module.css"
import Data from './components/Data'

const Table = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.Header}>
        <div className={styles.filters}>
           <div className={styles.tabsSection}>
               <div className={styles.tab1}>
                  <span style={{fontWeight: "700", color:"black"}}>ALL</span>
                  <span className={styles.number}>349</span>
               </div>
               <div className={styles.tab2}>
                   <span style={{fontWeight: "700", color:"black"}}>Deposit</span>
                   <span className={styles.number}>114</span>
               </div>
               <div className={styles.tab2}>
                   <span style={{fontWeight: "700", color:"black"}}>Withdraw</span>
                   <span className={styles.number}>213</span>
               </div>
               <div className={styles.tab2}>
                   <span style={{fontWeight: "700", color:"black"}}>Trade</span>
                   <span className={styles.number}>22</span>
               </div>
           </div>
           <div className={styles.searchSection}>
              <img src='/images/Search.png' alt='/' />
              <input type='text' alt='/' placeholder='Search by ID or destination'/>
           </div>
        </div>
        <div className={styles.headingSection}>
          <span>ID</span>
          <span className={styles.dateTime}>Date&Time<img src='/images/Down.png' /></span>
          <span>Type</span>
          <span className={styles.amount}>Amouint<img src='/images/Down.png' /></span>
          <span>Status</span>
        </div>
      </div>
      <div className={styles.tableContent}>
        <Data />
      </div>
    </div>
  )
}

export default Table
