import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles.menuItem} ${size ? styles.size : ""}`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
