/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Button.module.css"

const Button = () => {
  return (
    <div>
      <button className={styles.btn}>
        <img src='/images/Group.png' alt='/' />
        Export CSV
      </button>
    </div>
  )
}

export default Button
