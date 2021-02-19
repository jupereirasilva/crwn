import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import SignInSignUpPage from "./pages/signIn-signUp/SignInSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
