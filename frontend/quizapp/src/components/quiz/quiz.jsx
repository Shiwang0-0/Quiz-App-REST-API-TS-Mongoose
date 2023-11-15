import React from "react";
import "./quiz.css";

import createquizimg from "../../resources/createquizimg.gif";
import updatequizimg from "../../resources/updatequizimg.gif";

const Quiz = () => {
  return (
    <div className="quizSection">
      <div className="sectionButtons">

        <div className="card">
          <img src={createquizimg} alt="create"></img>
          <button>Create Quiz</button>
          <div className="buttonDescription">
            <ul>
              <li>Create quiz</li>
              <li>Enter Questions and Options</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={updatequizimg} alt="create"></img>
          <button>Update Quiz</button>
          <div className="buttonDescription">
            <ul>
              <li>Update quiz</li>
              <li>Update Questions and Options</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={createquizimg} alt="create"></img>
          <button>Get Quiz</button>
          <div className="buttonDescription">
            <ul>
              <li>Get a particular quiz</li>
              <li>Get all the quizes</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={createquizimg} alt="create"></img>
          <button>Publish Quiz</button>
          <div className="buttonDescription">
            <ul>
              <li>Publish your created quiz</li>
              <li>Ready to attempt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
