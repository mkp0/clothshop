import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../../Components/coustom-button/coustom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
      alert("Signed In Succfully");
    } catch (err) {
      alert("User not Found");
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
