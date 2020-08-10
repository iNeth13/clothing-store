import React from "react";
import "./sign-up.styles.scss";
import CustomButton from "../custom-btn/custom-btn.component";
import {auth , createUserProfileDoc } from '../../firebase/firebase';

class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      displayName:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  }
  handleChange =(e)=>{
    const {name,value} = e.target;
    this.setState(prevValue=>{
      return{
        ...prevValue,
        [name]: value
      };
    });
  }
  handleSubmit = async (e) =>{
    const {displayName , email , password , confirmPassword} = this.state;
    if(password!==confirmPassword){
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user , {displayName});
      this.setState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    }catch(err){
      console.log(err);
    };
  };
  render(){
    return (
      <div className="sign-up-form">
        <h3>I don't have an account</h3>
        <p className="text">Sign up with email</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
          className="input" 
          name="displayName" 
          placeholder="Username" 
          value={this.state.displayName} 
          onChange={this.handleChange}
          required
          />
          <input 
          className="input" 
          name="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={this.handleChange}
          required
          />
          <input 
          className="input" 
          name="password" 
          placeholder="Password" 
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
          required
          />
          <input
            className="input"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            required
          />
          <CustomButton 
              buttonName = "SIGN UP"
              onClick = {this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;