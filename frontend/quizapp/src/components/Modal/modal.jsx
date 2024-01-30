import  "./modal.css"

import { useState } from "react";
import { useNavigate } from "react-router";
import { getResponseError } from "../error/validationError/error";
import { Error } from "../error/validationError/error";


const OtpModal = ({closeModal}) => {
  
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [otpVal, setOtp] = useState({otp: ""});

  const SendOTP=async (e)=>{
    const retrievedToken = localStorage.getItem('token');
    e.preventDefault();
    try{
      const {otp}=otpVal;
      console.log(`this is toke ${retrievedToken}`);
    if(!retrievedToken)
    {
      console.log("token not recieved");
      return;
    }
     
      const response = await fetch(`http://localhost:3002/auth/verify-registration-otp/${retrievedToken}`, {
        method: "POST",
        body: JSON.stringify({otp}),
        headers: {
          'Content-Type':'application/json',
        },
      })

      const json=await response.json()
      console.log(json);
      if(json.status==="success")
        {
          navigate("/home");
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
  }

  const handleOtp = (e) => {
    setOtp({
      ...otpVal,
      [e.target.name]: e.target.value,
      
    });
    console.log(otpVal)
  };
    return (
      <>
      <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
            <p>Enter OTP</p>
            <input 
            
              type="number"
              placeholder="Enter Your Email"
              name="otp"
              onChange={handleOtp}
              value={otpVal.otp}
              required>
            </input>
            <button onClick={SendOTP} >Done </button>
          <Error message={error?.otp}></Error>
        </div>
      </>
    );
  };
export default OtpModal;  