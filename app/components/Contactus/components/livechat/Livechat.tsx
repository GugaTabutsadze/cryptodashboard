/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Livechat.module.css"

const Livechat = () => {
  return (
    <div className={styles.liveChatContainer}>
      <div className={styles.liveChat}>
         <img src='./images/Chatbot.png' alt='/' />
         <p>Live Chat</p>
         <span>
            Don’t have time to wait for the answer? Chat with us now.
         </span>
      </div>
      <div className={styles.contact}>
         <div className={styles.chatbot}>
            <span>Chatbot</span>
         </div>
         <p>Chat with us now</p>
      </div>
    </div>
  )
}

export default Livechat
