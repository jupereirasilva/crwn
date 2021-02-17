import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${styles.menuItem} ${size ? styles.size : ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
