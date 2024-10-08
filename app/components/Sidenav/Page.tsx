/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from "./Page.module.css"
import Dashboard from '../Dashboard/Dashboard'

const Sidenav = ({onDashboardClick, onTransactionsClick, onSupport}:any) => {
  return (
    <div className={styles.mainNavContainer}>
      <div className={styles.sideNavContainer}>
        <div className={styles.upperNav}>
          <p>@DOSOMECODING</p>
          <div className={styles.topPages}>
            <div onClick={onDashboardClick}>
              <img src='/images/otx.png' alt='/' />
              <span>Dashboard</span>
            </div>
            <div onClick={onTransactionsClick}>
              <img src='/images/isrebi.png' alt='/' />
              <span>Transactions</span>
            </div>
          </div>
        </div>
        <div className={styles.lowerNav}>
          <div>
            <img src='/images/Help.png' alt='/' />
            <span onClick={onSupport}>Support</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sidenav;

