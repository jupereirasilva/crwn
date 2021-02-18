import React from "react";

import styles from "./CollectionItem.module.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
