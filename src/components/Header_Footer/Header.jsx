import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.siteTitle}>Eco Community</h1>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className={styles.navItem}>
            <a href="/pollution-tracking">Pollution Tracking</a>
          </li>
          <li className={styles.navItem}>
            <a href="/community-reports">Community Reports</a>
          </li>
          <li className={styles.navItem}>
            <a href="/education">Education</a>
          </li>
        </ul>
        <div className={styles.authBtns}>
          <button className={styles.btn}>Sign Up</button>
          <button className={styles.btn}>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
