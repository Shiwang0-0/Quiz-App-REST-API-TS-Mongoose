import React from "react";
import "./exam.css";

import { Link } from "react-router-dom";
import startexamimg from "../../resources/startexamimg.gif";
import getreportimg from "../../resources/getreportimg.gif";

const Exam = () => {
  return (
    // <div className="examSection">
      <div className="sectionButtonsExam">

        <div className="cardExam">
          <img src={startexamimg} alt="start"></img>
          <button><Link to="/startexam" style={{ textDecoration: 'none',color:'inherit' }}>Give Exam</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Start exam</li>
              <li>Select answers for various questions</li>
            </ul>
          </div>
        </div>

        <div className="cardExam">
          <img src={getreportimg} alt="report"></img>
          <button><Link to="/getreport" style={{ textDecoration: 'none',color:'inherit' }}>Get Report</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Get Reports</li>
              <li>View Marks Scored</li>
            </ul>
          </div>
        </div>

    </div>
  );
};

export const StartExam = () => {
  return (
    <h1>createexam</h1>
      
  );
};

export const GetReport = () => {
  return (
    <h1>updateexam</h1>
      
  );
};


export default Exam;
