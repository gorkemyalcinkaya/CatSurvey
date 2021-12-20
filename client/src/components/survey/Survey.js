import React from "react";

const Survey = (props) => {
  return (
    <div>
      <div className="section ">
        <div>
          <label>Survey Title</label>
          <div style={{ fontSize: 35 }}>{props.formValues.surveyTitle}</div>
        </div>
        <ul>
          {props.formValues.questions.map((question, questionIndex) => {
            return (
              <ul>
                <div className="grey lighten-3 questionCard">
                  <li className="section" key={questionIndex}>
                    <label>Question {questionIndex + 1}</label>
                    <div style={{ fontSize: 28 }}>
                      <span>{question.title}</span>
                    </div>
                  </li>
                  <li key={`options${questionIndex}`}>
                    {question.options.map((option) => {
                      return (
                        <div className="section">
                          <label className="black-text">
                            <input
                              className="with-gap "
                              name={`group${questionIndex}`}
                              type="radio"
                            />
                            <span style={{ fontSize: 20 }}>{option.text}</span>
                          </label>
                        </div>
                      );
                    })}
                  </li>
                </div>
              </ul>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Survey;
