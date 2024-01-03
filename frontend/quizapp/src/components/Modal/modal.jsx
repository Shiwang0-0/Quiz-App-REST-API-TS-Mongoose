import  "./modal.css"
import { useState } from "react";

const OtpModal = ({closeModal}) => {

  const sendOTP=async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:3002/auth/send-otp', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Content-Type':'application/json'
      },
    })
    const data = await response.text();
    console.log(data)
    closeModal();
  }

  const [form, setForm] = useState({
    email: ""
  });
  const handleForm = (e) => {
    console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
    return (
      <>
      <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
            <p>Enter the email to get the OTP</p>
            <input 
            
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleForm}
              value={setForm.email}
              required>
            </input>
            <button onClick={sendOTP} >Done </button>

        </div>
      </>
    );
  };
export default OtpModal;