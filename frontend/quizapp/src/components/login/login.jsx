import React from "react";
import "./login.css";
import loginimg from '../../resources/loginImage.png'
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [credentials, setCredentials]=useState({email: "",password: ""});

  const handleSubmit= async (e)=>{
    e.preventDefault();
    fetch("http://localhost:3002/auth/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email: credentials.email,password: credentials.password})
    });
    const json= await Response.json();
    console.log(json);
  }

const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]:e.target.value})
}

  return (
    <div className="loginPage">
        <img src={loginimg} alt="loginimage"/>
      <div className="login"> 
        <h1 id="heading">Log in to QuizApp</h1>
        <form onSubmit={handleSubmit}>
        <div className="inputFields">
          <input type="email" placeholder="Enter Your Email" value={credentials.email} name="email" onChange={onChange}></input>
          <input type="password" placeholder="Enter Your Password" value={credentials.password} name="password" onChange={onChange}></input>
        </div>

        <button type="submit"  className="loginBtn"> Login </button>
        <div className="toRegister">
          First time? click <span className="toRegisterBtn"><Link to="/register" style={{ textDecoration: 'none',color:'inherit' }}>here</Link></span> to create
          new account
        </div>
        <div className="toActivate">
          Account Deactivated? click <span className="activateBtn"><Link to="/register" style={{ textDecoration: 'none',color:'inherit' }}>here</Link></span>{" "}
          to activate your account
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
