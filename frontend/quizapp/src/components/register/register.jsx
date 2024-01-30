import "./register.css";
import React, { useState } from "react";
import registerimg from "../../resources/registerimg.png";
import { Link,useNavigate} from "react-router-dom";
import Error from "../error/validationError/error";
import { getResponseError } from "../error/validationError/error";

const Register = () => {
  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  
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
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  
  return (
    <div className="registerPage">
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
          </div>
          <input type="submit" value="Submit" /> 
        </form>

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
