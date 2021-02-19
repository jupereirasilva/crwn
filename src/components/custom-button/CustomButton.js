import React from "react";

import styles from "./CustomButton.module.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className={styles.button} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
