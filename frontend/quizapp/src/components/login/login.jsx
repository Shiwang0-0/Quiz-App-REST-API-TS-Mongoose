import React from "react";
import "./login.css";
import loginimg from '../../resources/loginImage.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginPage">
        <img src={loginimg} alt="loginimage"/>
      <div className="login"> 
        <h1 id="heading">Log in to QuizApp</h1>
        <div className="inputFields">
          <input type="email" placeholder="Enter Your Email"></input>
          <input type="password" placeholder="Enter Your Password"></input>
        </div>

        <button className="loginBtn"><Link to="/home" style={{ textDecoration: 'none',color:'inherit' }}> Login </Link></button>
        <div className="toRegister">
          First time? click <span className="toRegisterBtn"><Link to="/register" style={{ textDecoration: 'none',color:'inherit' }}>here</Link></span> to create
          new account
        </div>
        <div className="toActivate">
          Account Deactivated? click <span className="activateBtn"><Link to="/register" style={{ textDecoration: 'none',color:'inherit' }}>here</Link></span>{" "}
          to activate your account
        </div>
      </div>
    </div>
  );
};

export default Login;
