import React from "react";

import styles from "./CustomButton.module.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? styles.googleSignIn : ""} ${
        styles.button
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
