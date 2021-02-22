import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import styles from "./SignInSignUp.module.scss";

const SignInSignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
