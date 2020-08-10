import React, { useState } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-btn/custom-btn.component";
import { auth , signInWithGoogle } from "../../firebase/firebase";
export default function SignIn() {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async e =>{
    try{
      await auth.signInWithEmailAndPassword(signIn.email , signIn.password);
      setSignIn({
        email:"",
        password:"",
      })
      console.log("sign in successfully");
    }
    catch(err){
      alert("password or email doesn't exists");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const googleButton = () => {
    return true;
  };
  return (
    <div className="sign-in-form">
      <h3 className="heading">I already have an account</h3>
      <p className="text">Sign in with email</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="input"
          name="email"
          placeholder="Email"
          type="email"
          value={signIn.email}
          onChange={handleChange}
        />
        <input
          className="input"
          name="password"
          placeholder="Password"
          type="password"
          value={signIn.password}
          onChange={handleChange}
        />

        <CustomButton 
        type="submit" 
        buttonName="SIGN IN"
        onClick={handleSubmit}
        />
        <CustomButton
          onClick={signInWithGoogle}
          buttonName="SIGN IN WITH GOOGLE"
          isGoogle={googleButton}
        ></CustomButton>
      </form>
    </div>
  );
}
