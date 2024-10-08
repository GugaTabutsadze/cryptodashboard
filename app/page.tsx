"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Sidenav from "./components/Sidenav/Page";
import { useState, useTransition } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Contactus from "./components/Contactus/Contactus";






export default function Home() {
  const [view, setView] = useState("Dashboard");
  const [headingText, setHeadingText] = useState("Dashboard");

  const handleDashboard = () => {
    setView("Dashboard");
    setHeadingText("Dashboard");
  };

  const handleTransactions = () => {
    setView("Transactions");
    setHeadingText("Transactions");
  };

  const handleSupport = () => {
    setView("Support");
    setHeadingText("Support");
  };

  return (
    <main className={styles.main}>
      <Sidenav 
        headingText={headingText}
        onDashboardClick={handleDashboard}
        onTransactionsClick={handleTransactions}
        onSupport={handleSupport}
      />
      {view === "Dashboard" && <Dashboard headingText={headingText} />}
      {view === "Transactions" && <Transactions headingText={headingText} />}
      {view === "Support" && <Contactus />}
    </main>
  );
}





