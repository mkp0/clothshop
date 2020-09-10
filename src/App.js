import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/homepage.component";
import Shop from "./Pages/shop/shop.comonent";
import Header from "./Components/header/header.component";
import SignInSignUpPage from "./Pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/signin" component={SignInSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
