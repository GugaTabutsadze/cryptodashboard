/* eslint-disable react/jsx-key */
import React from 'react'
import styles from "./Data.module.css"
import Table from '../Table'

const Data = () => {

    const data = [
        {
            id: "HD82NA1H",
            date: "2022-06-09",
            time: "07:06 PM",
            Type: {
                name: "INR Deposit",
                tag: "E-Transfer"
            },
            amount: "+ ₹81,123.10",
            status: "Pending"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-07",
            time: "02:48 PM",
            Type: {
                name: "INR Withdraw",
                tag: "Wire Transfer"
            },
            amount: "- ₹81,123.10",
            status: "Processing"
        },
        {
            id: "HD82NA3H",
            date: "2022-06-04",
            time: "09:21 AM",
            thing: "Buy",
            amounts: {
                amou: "+ 12.48513391 BTC",
                price: "- $81,123.10"
            },
            status: "Cancelled"
        },
        {
            id: "HD82NA4H",
            date: "2022-06-03",
            time: "01:32 PM",
            thing: "Sell",
            amounts: {
                amou: "- 0.36401628 BTC",
                price: "+ $19,378.84"
            },
            status: "Completed"
        },
        {
            id: "HD82NA5H",
            date: "2022-06-03",
            time: "09:02 PM",
            thing: "BTC Deposit",
            amounts: {
                amou: "+ 4.13946104 BTC",
                price: "+ $37,929.31"
            },
            status: "Completed"
        },
        {
            id: "HD82NA6H",
            date: "2022-06-01",
            time: "01:56 PM",
            thing: "BTC Withdraw",
            amounts: {
                amou: "- 10.00000000 BTC",
                price: "- $62,017.58"
            },
            status: "Completed"
        },
    ]

    const statusColor = {
       Pending: "#797E82",
       Processing: "#F5A50B",
       Cancelled: "#DC2626",
       Completed: "#059669"
    }


  return (
    <div className={styles.dataMainContainer}>
         <tbody>
         {
           data.map(dataList => (
             <tr className={styles.listContainer}>
                 <td className={styles.id}>{dataList.id}</td>
                 <td className={styles.dateTime}>
                     <div className={styles.date}>
                         {dataList.date}
                     </div>
                     <div className={styles.time}>
                         {dataList.time}
                     </div>
                 </td>
                 <td className={styles.type}>
                     <div className={styles.thing}>
                         {dataList.thing}
                     </div>
                     <div className={styles.thing}>
                         {dataList.Type?.name}
                     </div>
                     <div className={styles.tag}>
                         {dataList.Type?.tag}
                     </div>
                 </td>
                 <td className={styles.amount}>
                     <div className={styles.amou}>
                         {dataList.amount}
                     </div>
                     <div className={styles.amou}>
                         {dataList.amounts?.amou}
                     </div>
                     <div className={styles.price}>
                         {dataList.amounts?.price}
                     </div>
                 </td>
                 <td className={styles.status} style={{backgroundColor: statusColor[dataList.status]}}>
                     {dataList.status}
                </td>
             </tr>
                ))
            }
        </tbody>
    </div>
  )
}

export default Data
