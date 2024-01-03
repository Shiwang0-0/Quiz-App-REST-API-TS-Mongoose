import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import userimg from "../../resources/userimg.png";
import settingsimg from "../../resources/settings.png";
import logoutimg from "../../resources/log-out.png";
import editprofileimg from "../../resources/edit.png";
import quizimg from "../../resources/quizimg.png";
import examimg from "../../resources/examimg.png";

const Home = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="homepage">
      <div className="profileDropdown" ref={menuRef}>
        <div
          className="dropdownTrigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={userimg} alt="user"></img>
        </div>
        <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
          <h3>Hii Shiwang</h3>
          <ul>
            <DropdownItem text={"My Profile"} image={userimg} />
            <DropdownItem text={"Edit Profile"} image={editprofileimg} />
            <DropdownItem text={"Settings"} image={settingsimg} />
            <DropdownItem text={"Logout"} image={logoutimg} />
          </ul>
        </div>
      </div>
      <div className="majorHeading">What's on your mind ?</div>
      <div className="sections">
        <div className="quizSection">
        <Link to="/quiz" style={{ textDecoration: 'none',color: 'inherit' }}>
          <h1>Quiz Section</h1>
          <img src={quizimg} alt="quiz" />
          <div className="quizCard">
            <div className="innerCreateCard">
              <div className="cardDescription">
                <p className="title">Create quiz</p>
              </div>
              <p className="titleDescription">The user can create quiz</p>
            </div>
            <div className="innerUpdateCard">
              <div className="cardDescription">
                <p className="title">Update quiz</p>
              </div>
              <p className="titleDescription">The user can update quiz</p>
            </div>
            <div className="innerGetCard">
              <div className="cardDescription">
                <p className="title">Get quiz</p>
              </div>
              <p className="titleDescription">
                The user can get all the quizes quiz
              </p>
            </div>
            <div className="innerPublishCard">
              <div className="cardDescription">
                <p className="title">Publish Quiz</p>
              </div>
              <p className="titleDescription">
                The user can publish the quiz so that others can attempt it
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="examSection">
        <Link to="/exam" style={{ textDecoration: 'none',color:'inherit' }}>
          <h1>Exam Section</h1>
          <img src={examimg} alt="exam" />
          <div className="examCard">
            <div className="innerCreateCard">
              <div className="cardDescription">
                <p className="title">Start Exam</p>
              </div>
              <p className="titleDescription">The user can start the exam</p>
            </div>
            <div className="innerUpdateCard">
              <div className="cardDescription">
                <p className="title">Submit Exam</p>
              </div>
              <p className="titleDescription">The user can submit the exam</p>
            </div>
            <div className="innerUpdateCard">
              <div className="cardDescription">
                <p className="title">Exam Reports</p>
              </div>
              <p className="titleDescription">The user can get the exam report </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.image} alt="img"></img>
      <span>{props.text}</span>
    </li>
  );
}

export default Home;
