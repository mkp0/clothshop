import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/homepage.component";
import Shop from "./Pages/shop/shop.comonent";
import Header from "./Components/header/header.component";
import SignInSignUpPage from "./Pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscibefromauth = null;

  componentDidMount() {
    this.unsubscibefromauth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibefromauth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/signin" component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
