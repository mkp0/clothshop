import React from "react";
import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";
import "./sign-in-sign-up.style.scss";
export default function SignInSignUP() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn /> <SignUp />
    </div>
  );
}
