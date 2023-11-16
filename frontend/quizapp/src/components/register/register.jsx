import React, { useState} from "react";
import "./register.css";
import registerimg from "../../resources/registerimg.png";
import OtpModal from "../Modal/modal";
import { Link } from "react-router-dom";

const Register = () => {
  let [showOtpModal, setShowOtpModal] = useState(false);

  const closeModal=()=>setShowOtpModal(false);



  return (
    <div className="registerPage">
      <img src={registerimg} alt="registerimage" />
      <div className="register">
        <h1 id="heading">Register Your Account</h1>
        <div className="inputFields">
          <input type="name" placeholder="Enter Your Name"></input>
          <input type="email" placeholder="Enter Your Email"></input>
          <input type="password" placeholder="Enter Your Password"></input>
          <input type="password" placeholder="Re-enter Your Password"></input>
        </div>

        <button className="registerBtn" onClick={() => {setShowOtpModal(true)}}>
          Register
        </button>

        {showOtpModal && <OtpModal closeModal={closeModal} /> }

        <div className="toRegister">
          Already a user ? click <span className="toLoginBtn"><Link to="/login" style={{ textDecoration: 'none',color:'inherit' }}>here</Link></span> to log
          in to your account
        </div>
      </div>
    </div>
  );
};

export default Register;
