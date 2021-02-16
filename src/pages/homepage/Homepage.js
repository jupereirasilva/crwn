import React from "react";
import styles from "./Homepage.module.scss";
import Menu from "../../components/menu/Menu";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Menu />
    </div>
  );
};

export default Homepage;
