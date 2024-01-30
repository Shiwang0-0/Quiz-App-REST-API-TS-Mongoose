import  "./modal.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { getResponseError } from "../error/validationError/error";
import { Error } from "../error/validationError/error";
// import { useEffect } from "react";


const OtpModal = ({closeModal}) => {
  
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // const [token, setToken] = useState(null);
  const [Otp, setOtp] = useState({otp: ""});

  
  // useEffect(() => {
      
  //     setToken(retrievedToken);
  //   });

  const SendOTP=async (e)=>{
    const retrievedToken = localStorage.getItem('token');
    e.preventDefault();
    try{
      const {otp}=Otp;
      console.log(`this is toke ${retrievedToken}`);
    if(!retrievedToken)
    {
      console.log("token not recieved");
      return;
    }
     
      const response = await fetch(`http://localhost:3002/auth/verify-registration-otp/${retrievedToken}`, {
        method: "POST",
        body: JSON.stringify({ Otp:otp }),
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': `Bearer ${token}`
        },
      })

      if (response.status!=="success") {
        console.log("invalid credentials")
      }
      // const data = await response.text();
      // console.log(data)
      const json=await response.json()
      console.log(json);
        if(json.status==="success")
        {
          // localStorage.setItem('token',json.authtoken);
          navigate("/home");
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
    // console.log(e.target.value,e.target.name);
    setOtp({
      ...Otp,
      [e.target.name]: e.target.value,
      
    });
    console.log(Otp)
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
              value={Otp.otp}
              required>
            </input>
            <button onClick={SendOTP} >Done </button>
          <Error message={error?.otp}></Error>
        </div>
      </>
    );
  };
export default OtpModal;  