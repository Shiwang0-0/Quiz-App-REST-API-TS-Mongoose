import React from "react";
import "./quiz.css";

import { Link } from "react-router-dom";
import createquizimg from "../../resources/createquizimg.gif";
import updatequizimg from "../../resources/updatequizimg.gif";
import getquizimg from "../../resources/getquizimg.gif"
import publishquizimg from "../../resources/publishquizimg.gif"

const Quiz = () => {
  return (
    // <div className="quizSection">
      <div className="sectionButtons">

        <div className="cardQuiz">
          <img src={createquizimg} alt="create"></img>
          <button><Link to="/createquiz" style={{ textDecoration: 'none',color:'inherit' }}>Create Quiz</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Create quiz</li>
              <li>Enter Questions and Options</li>
            </ul>
          </div>
        </div>

        <div className="cardQuiz">
          <img src={updatequizimg} alt="update"></img>
          <button><Link to="/updatequiz" style={{ textDecoration: 'none',color:'inherit' }}>Update Quiz</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Update quiz</li>
              <li>Update Questions and Options</li>
            </ul>
          </div>
        </div>

        <div className="cardQuiz">
          <img src={getquizimg} alt="get"></img>
          <button><Link to="/getquiz" style={{ textDecoration: 'none',color:'inherit' }}>Get Quiz</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Get a particular quiz</li>
              <li>Get all the quizes</li>
            </ul>
          </div>
        </div>

        <div className="cardQuiz">
          <img src={publishquizimg} alt="publish"></img>
          <button><Link to="/publishquiz" style={{ textDecoration: 'none',color:'inherit' }}>Publish Quiz</Link></button>
          <div className="buttonDescription">
            <ul>
              <li>Publish your created quiz</li>
              <li>Ready to attempt</li>
            </ul>
          </div>
        {/* </div> */}

      </div>
    </div>
  );
};

export const CreateQuiz = () => {
  return (
    <h1>createquiz</h1>
      
  );
};

export const UpdateQuiz = () => {
  return (
    <h1>updatequiz</h1>
      
  );
};

export const GetQuiz = () => {
  return (
    <h1>getquiz</h1>
      
  );
};

export const PublishQuiz = () => {
  return (
    <h1>publishquiz</h1>
      
  );
};

export default Quiz;
