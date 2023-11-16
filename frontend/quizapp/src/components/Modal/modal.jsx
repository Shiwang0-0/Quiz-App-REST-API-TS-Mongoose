import  "./modal.css"
import { Link } from "react-router-dom";

const OtpModal = ({closeModal}) => {
    return (
      <>
      <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
            <p>Enter Otp recieved on your mail</p>
            <input></input>
            <button onClick={closeModal} ><Link to="/home" style={{ textDecoration: 'none',color:'inherit' }}> Done </Link></button>
        </div>
      </>
    );
  };
export default OtpModal;