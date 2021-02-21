import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import styles from "./Header.module.scss";

const Header = ({ currentUser }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.link}>
          SHOP
        </Link>
        <Link to="/contact" className={styles.link}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={styles.link} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className={styles.link}>
            SIGN IN
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
