import React, { useState } from "react";
import "./register.css";
import registerimg from "../../resources/registerimg.png";
// import OtpModal from "../Modal/modal";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Error from "../error/validationError/error";
import { getResponseError } from "../error/validationError/error";
const Register = () => {
  const [error, setError] = useState("");
  // let [showOtpModal, setShowOtpModal] = useState(false);

  // const closeModal = () => setShowOtpModal(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();




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
      const {name,email,password, confirmPassword}=credentials;
       const response = await fetch('http://localhost:3002/auth', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name: name,email: email,password: password,confirmPassword: confirmPassword}),
    });
    const json=await response.json()
    console.log(json);
      // if(!response)
      // {
      //   console.log("no res");
      // }
      // const data = await response.text(); 
      // console.log(data)
      console.log(json.status)
      if(json.status==='success')
      {
        localStorage.setItem('token',json.data.token);
        navigate("/otpmodal");
      }
      else{
        console.log("invalid credentials")
      }
    }
    catch (error) {
      if (error.response && error.response.status === 422) {
          const errorData = await error.response.json();
          console.log("Error Data:", errorData);
          const parsedError = getResponseError(errorData);
          setError(parsedError);
      } else {
          console.error("Network Error:", error);
          setError("Something went wrong. Please try again later.");
      }
  }
  };

  const handleForm = (e) => {
    // console.log(e.target.value,e.target.name);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  
  return (
    <div className="registerPage">
      {/* <p>{JSON.stringify(form)}</p> */}
      <img src={registerimg} alt="registerimage" />
      <div className="register">
        <h1 id="heading">Register Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputFields">
            <input
              type="name"
              placeholder="Enter Your Name"
              name="name"
              onChange={handleForm}
              value={credentials.name} 
              required
            ></input>
            <Error message={error?.name}></Error>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleForm}
              value={credentials.email}
              required
            ></input>
            <Error message={error?.email}></Error>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleForm}
              value={credentials.password}
              required
            ></input>
            <Error message={error?.password}></Error>
            <input
              type="password"
              placeholder="Re-enter Your Password"
              name="confirmPassword"
              onChange={handleForm}
              value={credentials.confirmPassword}
              required
            ></input>
            <Error message={error?.confirmPassword}></Error>
            {/* <input
              type="number"
              placeholder="Enter otp"
              name="otp"
              onChange={handleForm}
              value={setForm.otp}
              required
            ></input> */}
            {/* <Error message={error?.otp}></Error> */}
          </div>
          <input type="submit" value="Submit" />
          {/* <button className="registerBtn"> */}
        {/* <Link  to="/otpmodal" style={{ textDecoration: "none", color: "inherit" }}>
              Register
        </Link> */}
        {/* </button> */}
          
        </form>
        {/* <button className="registerBtn" onClick={handleSubmit}> */}
        
        {/* <button className="getOTPBtn" onClick={() => {setShowOtpModal(true)}}>
          Get OTP
        </button> */}

        {/* {showOtpModal && <OtpModal closeModal={closeModal} />} */}

        <div className="toRegister">
          Already a user ? click{" "}
          <span className="toLoginBtn">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
