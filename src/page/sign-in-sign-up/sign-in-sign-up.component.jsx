import React from "react";
import "./sign-in-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
export default function SignInSignUp() {
  return (
    <div className="form-wrapper">
      <SignIn />
      <SignUp />
    </div>
  );
}
