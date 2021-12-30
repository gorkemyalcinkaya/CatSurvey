import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import renderOptions from "../fields/OptionField";
import SurveyField from "../fields/SurveyField";
import { Link } from "react-router-dom";
import validate from "./Validate";

class SurveyForm extends Component {
  renderQuestions({ fields, meta: { error, submitFailed } }) {
    return (
      <ul className="container">
        {fields.map((question, index) => (
          <li key={index}>
            <div className="section">
              <div className=" row ">
                <span
                  className="col s11 text-accent-2"
                  style={{ fontSize: 30 }}
                >
                  Question {index + 1}
                </span>
                <button
                  className="col s1 btn-small waves-effect waves-light red lighten-1"
                  type="button"
                  onClick={() => fields.remove(index)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </div>
              <Field
                name={`${question}.title`}
                type="text"
                component={SurveyField}
                label="What is your Question"
              />
              <FieldArray
                name={`${question}.options`}
                component={renderOptions}
              />
            </div>
          </li>
        ))}
        <li key="buttons">
          <div className="section">
            <button
              className="btn-small waves-effect waves-light orange darken-1"
              type="button"
              onClick={() => fields.push({})}
            >
              Add Question
            </button>
          </div>
          {submitFailed && error && (
            <div className=" red-text lighten-1">{error}</div>
          )}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div style={{ marginBottom: "4%" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div className="container section ">
            <Field
              component={SurveyField}
              type="text"
              label="Survey Title"
              name="surveyTitle"
            ></Field>
          </div>

          <FieldArray name="questions" component={this.renderQuestions} />
          <div className="section container">
            <Link
              to="/surveys"
              className="red lighten-1 waves-effect waves-light btn-small white-text"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className=" light-blue lighten-1 waves-effect waves-light btn-small white-text right "
            >
              Next
              <i className="material-icons right">done</i>{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
