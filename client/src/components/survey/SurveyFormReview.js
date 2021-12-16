import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useNavigate } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  let navigate = useNavigate();
  return (
    <div>
      <h5>Preview</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div style={{ fontSize: 28 }}>{formValues.surveyTitle}</div>
        </div>
        <ul>
          {formValues.questions.map((question, index) => {
            return (
              <ul>
                <li key={index}>
                  <label>Question {index + 1}</label>
                  <div className="" style={{ fontSize: 28 }}>
                    <span>{question.title}</span>
                  </div>
                </li>
                <li>
                  {question.options.map((option) => {
                    return (
                      <div style={{ fontSize: 20 }}>
                        <i className="material-icons left small">
                          panorama_fish_eye
                        </i>
                        {option.text}
                      </div>
                    );
                  })}
                </li>
              </ul>
            );
          })}
        </ul>
      </div>
      <button
        className="btn-flat btn-small red lighten-1 white-text"
        onClick={onCancel}
      >
        <i className=" material-icons left">arrow_back</i>
        Back
      </button>
      <button
        className="right btn-flat btn-small blue lighten-1 white-text"
        onClick={() => submitSurvey(formValues, navigate)}
      >
        Create Survey
        <i className=" material-icons right">create</i>
      </button>
    </div>
  );
};
function mapStateToPRops(state) {
  console.log(state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToPRops, actions)(SurveyFormReview);
