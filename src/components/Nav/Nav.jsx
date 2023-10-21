import React from 'react';
import styles from "./Nav.module.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.right}>
          <p className={styles.ready}>Ready to build?</p>
          <a className={styles.contactBtn} href="#contact">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Nav