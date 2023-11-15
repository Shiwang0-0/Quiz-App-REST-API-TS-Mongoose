import  "./modal.css"

const OtpModal = ({closeModal}) => {
    return (
      <>
      <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
            <p>Enter Otp recieved on your mail</p>
            <input></input>
            <button onClick={closeModal} >Done</button>
        </div>
      </>
    );
  };
export default OtpModal;