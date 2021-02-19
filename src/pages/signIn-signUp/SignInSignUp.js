import React from "react";
import SignIn from "../../components/sign-in/SignIn";

import styles from "./SignInSignUp.module.scss";

const SignInSignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};

export default SignInSignUpPage;
