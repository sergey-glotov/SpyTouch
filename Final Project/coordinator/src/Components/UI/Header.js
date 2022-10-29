import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.image}></div>
        <button type="button" className={styles.logout}>התנתקות</button>
    </div>
  );
};

export default Header;
