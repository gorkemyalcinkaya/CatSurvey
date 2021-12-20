import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useNavigate } from "react-router-dom";
import Survey from "./Survey";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  let navigate = useNavigate();
  return (
    <div className="container section">
      <h5 className="section red-text lighten-1" style={{ fontSize: 35 }}>
        Preview
      </h5>
      <Survey formValues={formValues} />

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
        Create
        <i className=" material-icons right">create</i>
      </button>
    </div>
  );
};
function mapStateToPRops(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToPRops, actions)(SurveyFormReview);
