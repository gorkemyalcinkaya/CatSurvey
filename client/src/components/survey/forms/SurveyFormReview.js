import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { useNavigate } from "react-router-dom";
import Survey from "../Survey";

const SurveyFormReview = ({ onCancel, formValues, createSurvey }) => {
  let navigate = useNavigate();
  return (
    <div className="container section" style={{ marginBottom: "5%" }}>
      <h5 className="section red-text lighten-1" style={{ fontSize: 35 }}>
        Preview
      </h5>
      <Survey survey={formValues} />

      <button
        className="btn-flat btn-small red lighten-1 white-text"
        onClick={onCancel}
      >
        <i className=" material-icons left">arrow_back</i>
        Back
      </button>
      <button
        className="right btn-flat btn-small orange darken-1 white-text"
        onClick={() => createSurvey(formValues, navigate)}
      >
        Create
        <i className=" material-icons right">create</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
