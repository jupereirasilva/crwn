import React from "react";

import styles from "./FormInput.module.scss";

const FormInput = ({ handleChange, id, label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        onChange={handleChange}
        {...otherProps}
        id={id}
      />
      {label ? (
        <label
          className={`${styles.label} ${
            otherProps.value.length ? styles.shrink : ""
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
