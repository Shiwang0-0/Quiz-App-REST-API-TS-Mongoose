import React from "react";
import "./register.css";
import registerimg from '../../resources/loginImage.png'

const Register = () => {
  return (
    <div className="registerPage">
        <img src={registerimg} alt="registerimage"/>
      <div className="register"> 
        <h1 id="heading">Register Your Account</h1>
        <div className="inputFields">
          <input type="email" placeholder="Enter Your Email"></input>
          <input type="password" placeholder="Enter Your Password"></input>
          <input type="password" placeholder="Re-enter Your Password"></input>
        </div>

        <button className="registerBtn">Register</button>
        <div className="toRegister">
          Already a user ? click <span className="loginBtn">here</span> to log in to your account
        </div>
      </div>
    </div>
  );
};

export default Register;
