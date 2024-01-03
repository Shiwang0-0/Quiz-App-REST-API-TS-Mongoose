import React, { useState } from "react";
import "./register.css";
import registerimg from "../../resources/registerimg.png";
import OtpModal from "../Modal/Modal";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Error from "../error/validationError/error";
import { getResponseError } from "../error/validationError/error";
const Register = () => {
  const [error, setError] = useState("");
  let [showOtpModal, setShowOtpModal] = useState(false);

  const closeModal = () => setShowOtpModal(false);

  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const handleForm = (e) => {
    // console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleOTP = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:3002/auth/send-otp", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   // console.log(response);
  //   // console.log(form);
  // };

  // const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
       const response = await fetch('http://localhost:3002/auth', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Content-Type':'application/json'
      },
    })
      // if(!response)
      // {
      //   console.log("no res");
      // }
      const data = await response.text(); 
      console.log(data)
    }
    catch(error)
    {
      setError(getResponseError(error));
    }
   
  };



  
  return (
    <div className="registerPage">
      {/* <p>{JSON.stringify(form)}</p> */}
      <img src={registerimg} alt="registerimage" />
      <div className="register">
        <h1 id="heading">Register Your Account</h1>
        <form>
          <div className="inputFields">
            <input
              type="name"
              placeholder="Enter Your Name"
              name="uname"
              onChange={handleForm}
              value={setForm.uname}
              required
            ></input>
            <Error message={error?.uname}></Error>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleForm}
              value={setForm.email}
              required
            ></input>
            <Error message={error?.email}></Error>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleForm}
              value={setForm.password}
              required
            ></input>
            <Error message={error?.password}></Error>
            <input
              type="password"
              placeholder="Re-enter Your Password"
              name="confirmPassword"
              onChange={handleForm}
              value={setForm.confirmPassword}
              required
            ></input>
            <Error message={error?.confirmPassword}></Error>
            <input
              type="number"
              placeholder="Enter otp"
              name="otp"
              onChange={handleForm}
              value={setForm.otp}
              required
            ></input>
            <Error message={error?.otp}></Error>
          </div>
        </form>
        {/* <button className="registerBtn" onClick={() => {setShowOtpModal(true)}}> */}
        <button className="registerBtn" onClick={handleSubmit}>
        <Link exact to="/home" style={{ textDecoration: "none", color: "inherit" }}>
              Register
            </Link>
        </button>
        <button className="getOTPBtn" onClick={() => {setShowOtpModal(true)}}>
          Get OTP
        </button>

        {showOtpModal && <OtpModal closeModal={closeModal} />}

        <div className="toRegister">
          Already a user ? click{" "}
          <span className="toLoginBtn">
            <Link exact to="/" style={{ textDecoration: "none", color: "inherit" }}>
              here
            </Link>
          </span>{" "}
          to log in to your account
        </div>
      </div>
    </div>
  );
};

export default Register;
