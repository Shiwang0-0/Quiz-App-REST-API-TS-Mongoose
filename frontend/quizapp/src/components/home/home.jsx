import React, { useState, useEffect, useRef } from "react";
import "./home.css";
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
          <h1>Quiz Section</h1>
          <img src={quizimg} alt="quiz" />
          <div class="quizCard">
            <div class="innerCreateCard">
              <div class="frontSide">
                <p class="title">Create quiz</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">The user can create quiz</p>
              </div>
            </div>

            <div class="innerUpdateCard">
              <div class="frontSide">
                <p class="title">Update quiz</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">The user can update quiz</p>
              </div>
            </div>

            <div class="innerGetCard">
              <div class="frontSide">
                <p class="title">Get quiz</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">
                  The user can get all the quizes quiz
                </p>
              </div>
            </div>

            <div class="innerPublishCard">
              <div class="frontSide">
                <p class="title">Publish Quiz</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">
                  The user can publish the quiz so that others can attempt it
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="examSection">
          <h1>Exam Section</h1>
          <img src={examimg} alt="exam" />
          <div class="examCard">
            <div class="innerCreateCard">
              <div class="frontSide">
                <p class="title">Start Exam</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">The user can start the exam</p>
              </div>
            </div>

            <div class="innerUpdateCard">
              <div class="frontSide">
                <p class="title">Submit Exam</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">The user can submit the exam</p>
              </div>
            </div>

            <div class="innerUpdateCard">
              <div class="frontSide">   
                <p class="title">Exam Reports</p>
              </div>
              <div class="backSide">
                <p class="titleDescription">The user can get the exam report </p>
              </div>
            </div>

          </div>
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
