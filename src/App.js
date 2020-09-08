import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
